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
import TeachingDashboard from './Teach/TeachingDashboard.jsx';
import TeacherForm from './Teach/TeacherForm.jsx';
import BookSelection from './Teach/BookSelection.jsx';
import StationaryLists from './Teach/StationaryLists.jsx';
import TeachingPosts from './Teach/TeachingPosts.jsx';
import TeacherDetails from './Teach/TeachingDetails.jsx';
import BookDetails from './Teach/BookDetails.jsx';
import StationaryDetails from './Teach/StationaryDetails.jsx';

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
        <Route path="/Teaching" element={<TeachingDashboard/>} />
        <Route path="/teacher-form" element={<TeacherForm />} />
        <Route path="/teacher-dashboard" element={<TeachingDashboard/>} />
        <Route path="/teaching-posts" element={<TeachingPosts />} />
        <Route path="/teachers/:id" element={<TeacherDetails />} />
        <Route path="/teaching-details" element={<TeacherDetails />} />
        <Route path="/book-selection" element={<BookSelection />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/book-details" element={<BookDetails />} />
        <Route path="/stationary-lists" element={<StationaryLists />} />
        <Route path="/items/:id" element={<StationaryDetails />} />
        <Route path="/stationary-details" element={<StationaryDetails />} />
        </Routes>
    </Router>


  )
}

export default App;



