import './App.css';

import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ClothesDonationComponent from './FTC/Clothes.jsx';
import FoodDonationComponent from './FTC/Food.jsx';
import ToyDonationRequests from './FTC/Toys.jsx';
import BloodDonationComponent from './Med/BloodDonation.jsx';
import HomePage from './Med/HomePage.jsx';
import MedicalCasesComponent from './Med/doctor.jsx';
import MedDashboard from './Med/medDashboard.jsx';
import MedicalSuppliesComponent from './Med/medicalSupplies.jsx';
import BookDetails from './Teach/BookDetails.jsx';
import BookSelection from './Teach/BookSelection.jsx';
import StationaryDetails from './Teach/StationaryDetails.jsx';
import StationaryLists from './Teach/StationaryLists.jsx';
import TeacherForm from './Teach/TeacherForm.jsx';
import TeachingDashboard from './Teach/TeachingDashboard.jsx';
import TeacherDetails from './Teach/TeachingDetails.jsx';
import TeachingPosts from './Teach/TeachingPosts.jsx';

import AOL from './admin/2_Admin_organization_list';
import DL from './admin/3_Donor_list';
import ChangePasswordPage from './admin/AdminChangePassword';
import AdminDashboard from './admin/Admin_Dashboard.jsx';
import Donor1 from './admin/Donor_1';
import Donor2 from './admin/Donor_2';
import Organization1 from './admin/Organization_1';
import Organization2 from './admin/Organization_2';
import Organization3 from './admin/Organization_3';
import LoginPage from './admin/login.jsx';

function App() {
  const [showBloodDonation, setShowBloodDonation] = useState(false);
  const [showSupplies, setSuppliesClick] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/HomePage" element={<HomePage/>} />
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
        <Route path="/" element={<LoginPage/>} />
        <Route path="/AOL" element={<AOL/>} />
        <Route path="/DL" element={<DL/>} />
        <Route path="/organization1" element={<Organization1/>} />
        <Route path="/organization2" element={<Organization2/>} />
        <Route path="/organization3" element={<Organization3/>} />
        <Route path="/donor1" element={<Donor1/>} />
        <Route path="/donor2" element={<Donor2/>} />
        <Route path="/ChangePasswordPage" element={<ChangePasswordPage/>} />
        <Route path="/adminDashboard" element={<AdminDashboard/>} />
        </Routes>
    </Router>


  )
}

export default App;



