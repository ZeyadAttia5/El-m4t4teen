import './App.css';
import React, { useState } from 'react';
import MedDashboard from './Med/medDashboard.jsx';
import MedicalSuppliesComponent from './Med/medicalSupplies.jsx';
import BloodDonationComponent from './Med/BloodDonation.jsx';
import MedicalCasesComponent from './Med/doctor.jsx';
import ToyDonationRequests from './FTC/Toys.jsx';
import FoodDonationComponent from './FTC/Food.jsx';
import ClothesDonationComponent from './FTC/Clothes.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Med/HomePage.jsx';

function App() {
  const [showBloodDonation, setShowBloodDonation] = useState(false);
  const [showSupplies, setSuppliesClick] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/MedDashboard" element={<MedDashboard />} />
        <Route path="/BloodDonation" element={<BloodDonationComponent />} />
        <Route path="/SuppliesDonation" element={<MedicalSuppliesComponent />} />
        <Route path="/MedicalCases" element={<MedicalCasesComponent />} />
        <Route path="/ToyDonation" element={<ToyDonationRequests />} />
        <Route path="/FoodDonation" element={<FoodDonationComponent />} />
        <Route path="/ClothesDonation" element={<ClothesDonationComponent />} />
      </Routes>
    </Router>
    
   
  );
}

export default App;
