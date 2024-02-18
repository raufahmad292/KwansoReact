// src/App.tsx

import React, { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';
import Pagination from '../components/Pagination';
import { User } from '../types/users';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectUser } from '../redux/action';

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [genderFilter, setGenderFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
   // Import your action creator

  const dispatch = useDispatch(); // Get the dispatch function from the Redux store

  const handleUserClick = (user:User) => {
    dispatch(selectUser(user)); // Dispatch the selectUser action with the clicked user
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`https://randomuser.me/api/?page=${page}&results=10${genderFilter ? `&gender=${genderFilter}` : ''}`);
        const data = await response.json();
        setUsers(data.results);
        setFilteredUsers(data.results);
        setTotalPages(data.info.results);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [page, genderFilter]);

  useEffect(() => {
    // Filter users based on searchQuery
    const filtered = users.filter(user => {
      const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
      const email = user.email.toLowerCase();
      const location = `${user.location.city}, ${user.location.country}`.toLowerCase();
      const phone = user.phone.toLowerCase();
      const title = user.name.title.toLowerCase();
      
      return fullName.includes(searchQuery.toLowerCase())  || title.includes(searchQuery.toLowerCase())|| email.includes(searchQuery.toLowerCase()) || location.includes(searchQuery.toLowerCase()) || phone.includes(searchQuery.toLowerCase());
    });
    setFilteredUsers(filtered);
  }, [searchQuery, users]);

  const handleNextPage = () => {
    setPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGenderFilter(e.target.value === 'all' ? null : e.target.value);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  

  return (
    <div className="app flex flex-col items-center bg-neutral-100">
  <h1 className="text-3xl mt-5 font-bold underline">User Listing</h1>
  
  <div className="filters mt-7">
    <label htmlFor="gender-filter">Filter by Gender:</label>
    <select id="gender-filter" onChange={handleFilterChange} className="ml-2">
      <option value="all">All</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
    <input
      type="text"
      placeholder="Search by name"
      value={searchQuery}
      onChange={handleSearch}
      className="ml-2"
    />
  </div>
  <div className="user-list mt-4">
    { //user card to showing each user all details 
      filteredUsers.map(user => (
      <Link onClick={() => handleUserClick(user)} key={user.login.uuid} to={`/profile/${user.login.uuid}`}>
        <UserCard user={user} />
      </Link>
    ))}
  </div>
  <Pagination
    currentPage={page}
    totalPages={totalPages}
    onNextPage={handleNextPage}
    onPrevPage={handlePrevPage}
    disablePrev={page === 1}
    disableNext={page === totalPages}
  />
</div>

  );
};

export default App;
