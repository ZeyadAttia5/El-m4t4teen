import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './login.css';

const ChangePasswordPage = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);
  const [oldPasswordIncorrect, setOldPasswordIncorrect] = useState(false);
  const [newPasswordsNotMatch, setNewPasswordsNotMatch] = useState(false);

  const handleChangePassword = (e) => {
    e.preventDefault();
    setButtonClicked(true);

    let newErrorMessage = '';

    // Check if old password matches the stored password
    const storedPassword = 'admin123'; // Example stored password
    if (oldPassword !== storedPassword) {
      setOldPasswordIncorrect(true);
      newErrorMessage = 'Old password is incorrect';
    } else {
      setOldPasswordIncorrect(false);
    }

    // Check if new password matches the confirmed new password
    if (newPassword !== confirmNewPassword) {
      setNewPasswordsNotMatch(true);
      newErrorMessage += `${newErrorMessage ? ' and ' : ''}New passwords don't match`;
    } else {
      setNewPasswordsNotMatch(false);
    }

    // Set the error message
    alert(newErrorMessage || 'Password changed successfully');

    if((newPassword === confirmNewPassword) && (oldPassword === storedPassword)){
      window.location.href='/adminDashboard';
    }
    // Return if there are any errors
    if (newErrorMessage) return;

    // Perform logic to change password, such as updating it in the database

    // Reset form fields
    setOldPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
  };

  return (
    <div className="login-page">
      <form onSubmit={handleChangePassword} className="login-form">
        <h2 className='h2'>
        <Link to="/AdminDashboard" className="back-arrow"><FaArrowLeft /></Link>  Change Password</h2>
        {errorMessage && (
          <p className="error-message">{errorMessage}</p>
        )}
        <input 
          type="password" 
          placeholder="Old Password" 
          value={oldPassword} 
          onChange={(e) => setOldPassword(e.target.value)} 
          style={{borderColor: oldPasswordIncorrect ? 'red' : ''}} // Highlight with red border if old password is incorrect
          required 
        />
        <input 
          type="password" 
          placeholder="New Password" 
          value={newPassword} 
          onChange={(e) => setNewPassword(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Confirm New Password" 
          value={confirmNewPassword} 
          onChange={(e) => setConfirmNewPassword(e.target.value)} 
          style={{borderColor: buttonClicked && newPassword !== confirmNewPassword ? 'red' : ''}} // Highlight with red border
          required 
        />
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
};

export default ChangePasswordPage;
