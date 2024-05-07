import './App.css'
import TransportationPicker from './TransportationPicker/TransportationPicker.jsx'
import SchedulePicker from './SchedulePicker/SchedulePicker.jsx'
import ScheduleDropoff from './ScheduleDropoff/ScheduleDropoff.jsx'
import ChooseItemTypePage from './ChooseItemTypePage/ChooseItemTypePage.jsx'; // Assuming you have a component for choosing item type
import RedirectionButton from './RedirectionButton/RedirectionButton.jsx'
import LoginRedirect from './RedirectToLogin/LoginRedirect.jsx'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import AdminPage from './LoginPage/AdminPage';
import RequestCard from './RequestPost/RequestCard';

//comment
function App() {

  return (
    <>
    <TransportationPicker/>
    <SchedulePicker/>
    <ScheduleDropoff/>
    <div>
      <RequestCard/>
    </div>
      <Router>
        <RedirectionButton title="Add Item" />
      </Router>
      <Router>
        <LoginRedirect title= "Log in as an admin"/>
        <Routes>
          <Route path ="admin" element={<AdminPage/>}/>
        </Routes>
      </Router>
      
  
    </>
  )
}

export default App
