import './App.css'
import TransportationPicker from './TransportationPicker/TransportationPicker.jsx'
import SchedulePicker from './SchedulePicker/SchedulePicker.jsx'
import ScheduleDropoff from './ScheduleDropoff/ScheduleDropoff.jsx'
import RedirectionButton from './RedirectionButton/RedirectionButton.jsx'
import LoginRedirect from 'C:/Users/Seif/Documents/GitHub/El-m4t4teen/Helpawy/src/RedirectToLogin/LoginRedirect.jsx'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import AdminPage from 'C:/Users/Seif/Documents/GitHub/El-m4t4teen/Helpawy/src/LoginPage/AdminPage.jsx';
import RequestCard from 'C:/Users/Seif/Documents/GitHub/El-m4t4teen/Helpawy/src/RequestPost/RequestCard.jsx';
import DonorVolunteer from 'C:/Users/Seif/Documents/GitHub/El-m4t4teen/Helpawy/src/DonorPage/DonorVolunteer.jsx';
import RequestView from 'C:/Users/Seif/Documents/GitHub/El-m4t4teen/Helpawy/src/DonorPage/RequestView.jsx';
import DonorVolunteerRedirect from 'C:/Users/Seif/Documents/GitHub/El-m4t4teen/Helpawy/src/DonorPage/DonorVolunteerRedirect.jsx';

function App() {

  return (
    <>
    <Router>
        <DonorVolunteerRedirect title ="View Donor Functionalities"/>
        
    </Router>

    <TransportationPicker/>
    <SchedulePicker/>
    <ScheduleDropoff/>
    <div>
      
    </div>
      <Router>
        <RedirectionButton title="New Post" />
        <RequestCard/>
      </Router>
      <Router>
        <LoginRedirect title="Log in as an admin" />
        <Routes>
          <Route path="admin" element={<AdminPage />} />
        </Routes>
      </Router>
      

      
  
    </>
  )
}

export default App
