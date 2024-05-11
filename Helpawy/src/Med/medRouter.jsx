import React from 'react';
import { useNavigate } from 'react-router-dom';
import MedDashboard from './medDashboard.jsx';
import MedicalSuppliesComponent from './medicalSupplies.jsx';
import BloodDonationComponent from './BloodDonation.jsx';
import MedicalCasesComponent from './doctor.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function MedRouter() {
  
    return (
      <Router>
        <Routes>
        <Route path="*" element={<MedDashboard />} />
        <Route path="/BloodDonation" element={<BloodDonationComponent />} />
        <Route path="/SuppliesDonation" element={<MedicalSuppliesComponent />} />
        <Route path="/MedicalCases" element={<MedicalCasesComponent />} />
        </Routes>
      </Router>
  
    );
  }
  
  export default MedRouter;