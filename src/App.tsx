// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './Pages/Profile';
import UserListing from './Pages/UserListing';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
        <Route path="/profile/:userId" Component={Profile} />
          <Route path="/"  Component={UserListing} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
