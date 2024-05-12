import React from 'react';
import './adminDashboard.css';

const handleDonorClick = () => {
  window.location.href='/DL';
}

const handleOrganizationClick = () => {
  window.location.href='/AOL';
}

const handleChangePasswordClick = () => {
  window.location.href='/ChangePasswordPage';
}

const handleLogoutClick = () => {
  window.location.href='/';
}

const handleClick = () => {
  window.location.href='/organization1';
}

function AdminDashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
      <div className="change-password2" onClick={handleLogoutClick}>
          <h2>Logout</h2>
        </div>
        <h1>Welcome to the Admin Dashboard</h1>
        <div className="change-password" onClick={handleChangePasswordClick}>
          <h2>Change Password</h2>
        </div>
      </div>
      <div className="dashboard-options">
        
        <div className="dashboard-option medical-supplies"  onClick={handleDonorClick}>
          <h2>Donors List</h2>
          <p className='p'>View a list of all the donors that want to volunteer as doctors or teachers.</p>
        </div>
        
        <div className="dashboard-option blood-donation" onClick={handleOrganizationClick}>
          <h2>Organizations List</h2>
          <p className='p'>View a list of all organizations requesting to use the application.</p>
        </div>
        <div className="dashboard-option doctor-visit" onClick={handleClick} >
          <h2>View Registered Organizations</h2>
          <p className='p'>View a list of all the organizations registered on the system.</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
