import React from 'react';

const LoginForm = () => {
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
      <button>Login</button>
    </div>
  );
};

export default LoginForm;
