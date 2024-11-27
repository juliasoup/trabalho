import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Logout from './components/Auth/Logout';
import Maintenance from './pages/Maintenance';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  return (
    <Router>
      <div>
        {isAuthenticated ? (
          <>
            <Logout onLogout={() => setIsAuthenticated(false)} />
            <Routes>
              <Route path="/maintenance" element={<Maintenance />} />
              <Route path="*" element={<Navigate to="/maintenance" />} />
            </Routes>
          </>
        ) : (
          <>
            <Routes>
              <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
