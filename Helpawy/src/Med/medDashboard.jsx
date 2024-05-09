import React from 'react';
import './medDashboard.css'; // Importing the CSS file

function MedDashboard({ onBloodDonationClick, onMedicalSuppliesClick,onDoctorClick }) {
  return (
    <div className="dashboard">
      <h1>Welcome to the Medical Donation Dashboard</h1>
      <div className="dashboard-options">
        <div className="dashboard-option medical-supplies" onClick={onMedicalSuppliesClick}>
          <h2>Medical Supplies</h2>
          <p>Donate medical supplies such as devices, medication, etc.</p>
        </div>
        <div className="dashboard-option blood-donation" onClick={onBloodDonationClick}>
          <h2>Blood Donation</h2>
          <p>Donate blood to help save lives.</p>
        </div>
        <div className="dashboard-option doctor-visit" onClick={onDoctorClick}>
          <h2>Volunteer as a Doctor</h2>
          <p>Volunteer to provide free medical consultations.</p>
        </div>
      </div>
    </div>
  );
}

export default MedDashboard;


