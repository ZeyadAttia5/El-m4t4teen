// AdminLogin.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Here you can implement your authentication logic
    // For simplicity, let's assume any non-empty username and password is valid
    if (username.trim() && password.trim()) {
      // Redirect to the Admin Page
      navigate('/admin');
    } else {
      // Handle invalid login
      alert('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AdminLogin;
