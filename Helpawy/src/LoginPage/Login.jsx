import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function LoginForm  ()  {
  const navigate=useNavigate();

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
      </div>
      <button onClick={()=>{navigate("/AdminPage")}}>Login</button>
    </div>
  );
};

export default LoginForm;
