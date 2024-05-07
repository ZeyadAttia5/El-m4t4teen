import './App.css'
import TransportationPicker from './TransportationPicker/TransportationPicker.jsx'
import SchedulePicker from './SchedulePicker/SchedulePicker.jsx'
import ScheduleDropoff from './ScheduleDropoff/ScheduleDropoff.jsx'
// import ChooseItemTypePage from './ChooseItemTypePage/ChooseItemTypePage.jsx'; // Assuming you have a component for choosing item type
import RedirectionButton from './RedirectionButton/RedirectionButton.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import BloodDonationComponent from './Med/BloodDonation.jsx'
import MedDashboard from './Med/medDashboard.jsx'
import React, { useState } from 'react';
function App() {

  const [showBloodDonation, setShowBloodDonation] = useState(false);

  return (
    <>
      {showBloodDonation ? (
        <BloodDonationComponent />
      ) : (
        <MedDashboard onBloodDonationClick={() => setShowBloodDonation(true)} />
      )}
    </>
  );
  
}

export default App
