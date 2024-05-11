import './App.css';
import React, { useState } from 'react';
import MedDashboard from './Med/medDashboard.jsx';
import MedicalSuppliesComponent from './Med/medicalSupplies.jsx';
import BloodDonationComponent from './Med/BloodDonation.jsx';
import MedicalCasesComponent from './Med/doctor.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [showBloodDonation, setShowBloodDonation] = useState(false);
  const [showSupplies, setSuppliesClick] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MedDashboard />} />
        <Route path="/BloodDonation" element={<BloodDonationComponent />} />
        <Route path="/SuppliesDonation" element={<MedicalSuppliesComponent />} />
        <Route path="/MedicalCases" element={<MedicalCasesComponent />} />
      </Routes>
    </Router>

  );
}

export default App;
