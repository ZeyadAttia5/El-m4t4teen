import React from 'react';
import './medDashboard.css'; // Importing the CSS file
import { useNavigate } from 'react-router-dom';
import MedicalSuppliesComponent from './medicalSupplies.jsx';
import BloodDonationComponent from './BloodDonation.jsx';
import MedicalCasesComponent from './doctor.jsx';


function MedDashboard({}) {
  const navigate = useNavigate();

  const handleMedicalSuppliesClick = () => {
    navigate('/SuppliesDonation'); // Navigate to the medical supplies route
  };

  const handleBloodDonationClick = () => {
    navigate('/BloodDonation'); // Navigate to the blood donation route
  };

  const handleDoctorClick = () => {
    navigate('/MedicalCases'); // Navigate to the volunteer as doctor route
  };
  return (
    <div className="dashboard">
      <h1>Welcome to the Medical Donation Dashboard</h1>
      <div className="dashboard-options">
        <div className="dashboard-option medical-supplies" onClick={handleMedicalSuppliesClick}>
          <h2>Medical Supplies</h2>
          <p>Donate medical supplies such as devices, medication, etc.</p>
        </div>
        <div className="dashboard-option blood-donation" onClick={handleBloodDonationClick}>
          <h2>Blood Donation</h2>
          <p>Donate blood to help save lives.</p>
        </div>
        <div className="dashboard-option doctor-visit" onClick={handleDoctorClick}>
          <h2>Volunteer as a Doctor</h2>
          <p>Volunteer to provide free medical consultations.</p>
        </div>
      </div>
     
    </div>


  );
}

export default MedDashboard;


