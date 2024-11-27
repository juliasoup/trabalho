import React from 'react';
import { setAuthToken } from '../../services/api';

const Logout = ({ onLogout }) => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuthToken(null);
    onLogout();
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
