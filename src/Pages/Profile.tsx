import React from 'react';
import { useSelector } from 'react-redux';
import CountryFlag from 'react-country-flag';
import { GoogleMap, useLoadScript,  } from '@react-google-maps/api'
import {MarkerF} from '@react-google-maps/api'
import { useState } from 'react';
import {GOOGLE_MAPS_API_KEY} from '../googlemapsapikey'
const Profile = () => {
  const [showMap, setShowMap]                   =   useState<boolean>(false);
  const [showDetailsPopup, setShowDetailsPopup] =   useState<boolean>(false);
  const [showEmailPopup, setShowEmailPopup]     =   useState<boolean>(false);
  const selectedUser = useSelector((state:any) => state.red.selectedUser);
  
  const toggleEmailPopup = () => {
    setShowEmailPopup(!showEmailPopup);
  };
  const mapContainerStyle = {
    width: '60vw',
    height: '60vh',
  };
  const openMap = () => {
    setShowMap(true);
  };

  const closeMap = () => {
    setShowMap(false);
  };

  // Define map options
  const center = {
    lat: parseFloat(selectedUser?.location?.coordinates?.latitude),
    lng: parseFloat(selectedUser?.location?.coordinates?.longitude),
  };
  const options = {
    zoom: 2,
    center: center,
  };
  const toggleDetailsPopup = () => {
    setShowDetailsPopup(!showDetailsPopup);
  };
   const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }
  return (

    <div className="flex justify-center items-center h-screen bg-neutral-100" >
    <div className='bg-neutral-50'>   
    {selectedUser && (
      <div className="text-center">
        <p className="mt-3 text-4xl font-bold">User Profile</p>
        <img src={selectedUser.picture.large} alt="Profile" className="rounded-full w-24 h-24 mx-auto mt-10" />
        <h2 className="text-2xl font-bold">{selectedUser.name.title} {selectedUser.name.first} {selectedUser.name.last}</h2>
        <p>Gender: {selectedUser.gender}</p>
        <p>Date of Birth: {new Date(selectedUser.dob.date).toLocaleDateString()}</p>
        <p>Age: {selectedUser.dob.age}</p>
        <p>Location: {selectedUser.location.city}, {selectedUser.location.country}</p>
        <p>Latitude:{selectedUser.location.coordinates.latitude}</p>
        <p>Longitude:{selectedUser.location.coordinates.longitude}</p>
        <p>Registered: {new Date(selectedUser.registered.date).toLocaleDateString()} ({selectedUser.registered.age} years ago)</p>
        <div className="mt-4">
          Nationality: <CountryFlag countryCode={selectedUser.nat} svg style={{ width: '1.5em', height: '1.5em' }} />
        </div>
        <div className="mt-4">

        <button onClick={toggleEmailPopup} className="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Show Email ✉️ </button>
        <button onClick={openMap} className="ml-3 bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Show Location on Map 🗺️</button>
        <button onClick={toggleDetailsPopup} className=" ml-3 bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Contact Details 📞</button>

        {showEmailPopup && (
            <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center z-10">
              <div className="bg-white p-4 rounded shadow-lg">
                <p className="text-xl font-bold mb-2">Email Details</p>
                <p>Email: {selectedUser.email}</p>
                <button onClick={toggleEmailPopup} className="text-blue-500 underline mt-2">Close</button>
              </div>
            </div>
          )}

          {showDetailsPopup && (
            <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center z-10">
              <div className="bg-white p-4 rounded shadow-lg">
                <p className="text-xl font-bold mb-2">Contact Details</p>
                <p>Phone: {selectedUser.phone}</p>
                <p>Cell: {selectedUser.cell}</p>
                <button onClick={toggleDetailsPopup} className="text-blue-500 underline mt-2">Close</button>
              </div>
            </div>
          )}
        
          {showMap && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center z-10">
              <div className="relative w-3/4 h-3/4">
                <div className="absolute top-0 right-0 p-2">
                  <button onClick={closeMap} className="bg-white text-gray-800 font-bold py-1 px-3 rounded">
                    Close Map
                  </button>
                </div>
                <GoogleMap mapContainerStyle={mapContainerStyle} options={options}>
                  <MarkerF position={center}  ></MarkerF>
                </GoogleMap>
              </div>
            </div>
          )}

        
        
      
    </div>

       </div>
    )}
    </div>
      {(selectedUser==null)?
      <h1>Go Back To User Listing Page</h1>:null
      }
    </div>


  );
};

export default Profile;
