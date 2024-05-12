import './App.css';
// import ChooseItemTypePage from './ChooseItemTypePage/ChooseItemTypePage.jsx'; // Assuming you have a component for choosing item type
import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import AdminDashboard from './admin/Admin_Dashboard.jsx';
function App() {

  const [showBloodDonation, setShowBloodDonation] = useState(false);
  const [showSupplies, setSuppliesClick] = useState(false);

  return (
    <>
      <AdminDashboard/>

    </>
  );
  
}

export default App
