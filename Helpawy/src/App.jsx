import './App.css'
import TransportationPicker from './TransportationPicker/TransportationPicker.jsx'
import SchedulePicker from './SchedulePicker/SchedulePicker.jsx'
import ScheduleDropoff from './ScheduleDropoff/ScheduleDropoff.jsx'
import RedirectionButton from './RedirectionButton/RedirectionButton.jsx'
import LoginRedirect from './RedirectToLogin/LoginRedirect.jsx'

import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import AdminPage from './LoginPage/AdminPage';
import RequestCard from './RequestPost/RequestCard';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPage from './LoginPage/AdminPage.jsx';


// my User stories: 55, 56, 57, 58, 59, 66, 67, 68, 69, 70, 71, 72
// the ones I finished: 55, 56, 57, 58, 59, 66


//comment
function App() {

  return (
    <>
      <TransportationPicker />
      <SchedulePicker />
      <ScheduleDropoff />

      {/* <RequestCard /> */}

      <Router>
        <RedirectionButton title="New Post" />
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
