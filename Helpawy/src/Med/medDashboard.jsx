import React from 'react';
import './medDashboard.css'; // Importing the CSS file

function MedDashboard({ onBloodDonationClick }) {
  return (
    <div className="dashboard">
      <h1>Welcome to the Medical Donation Dashboard</h1>
      <div className="dashboard-options">
        <div className="dashboard-option medical-supplies">
          <h2>Medical Supplies</h2>
          <p>Donate medical supplies such as bandages, gloves, etc.</p>
        </div>
        <div className="dashboard-option medication">
          <h2>Medication</h2>
          <p>Donate unused medication for those in need.</p>
        </div>
        <div className="dashboard-option blood-donation" onClick={onBloodDonationClick}>
          <h2>Blood Donation</h2>
          <p>Donate blood to help save lives.</p>
        </div>
        <div className="dashboard-option doctor-visit">
          <h2>Doctor Visit</h2>
          <p>Volunteer to provide medical consultations.</p>
        </div>
      </div>
    </div>
  );
}

export default MedDashboard;

