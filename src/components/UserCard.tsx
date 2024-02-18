// src/components/UserCard.tsx

import React from 'react';
import { User } from '../types/users';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="user-card bg-neutral-50 mt-10">
      <img src={user.picture.large} alt="User" />
      <h2>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
      <p>Email: {user.email}</p>
      <p>Location: {`${user.location.city}, ${user.location.country}`}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};

export default UserCard;
