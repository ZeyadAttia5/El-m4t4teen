import './App.css'
import TransportationPicker from './TransportationPicker/TransportationPicker.jsx'
import SchedulePicker from './SchedulePicker/SchedulePicker.jsx'
import ScheduleDropoff from './ScheduleDropoff/ScheduleDropoff.jsx'

import RedirectionButton from './RedirectionButton/RedirectionButton'
import LoginRedirect from './RedirectToLogin/LoginRedirect.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPage from './LoginPage/AdminPage.jsx';
import Navbar from './NavigationBar/NavBar'
import PostCard from './OrgPostCards/PostCards.jsx'
import OrgPost from './OrganizationRepresentative/Posts/PostsContainer.jsx'

import ecgMachine from './assets/ecg_machine.jpg';
import ventilator from './assets/ventilator.jpg';
import diazepam from './assets/diazepam.jpg';
import actonel from "./assets/actonel.jpg";

// my User stories: 55, 56, 57, 58, 59, 66, 67, 68, 69, 70, 71, 72
// the ones I finished: 55, 56, 57, 58, 59, 66

//comment
function App() {
  const posts = [
    // Sample data for medical supplies donation requests
    {
      id: 1,
      type: 'Medical Device',
      title: 'ECG Machine',
      quantity_requested: 3,
      quantity_fulfilled: 1,
      description: 'Portable ECG Machine with 12-lead monitoring capability.',
      image: ecgMachine,
      fulfilled: false,
    },
    {
      id: 2,
      type: 'Medical Equipment',
      title: 'Ventilator',
      quantity_requested: 2,
      quantity_fulfilled: 1,
      description: 'Advanced ICU ventilator with built-in oxygen concentrator.',
      image: ventilator,
      fulfilled: false,
    },
  
    {
      id: 3,
      type: 'Medication',
      title: 'Diazepam',
      quantity_requested: 5,
      quantity_fulfilled: 3,
      description: 'Used to treat anxiety, seizures, alcohol withdrawal syndrome, and muscle spasms.',
      image: diazepam,
      fulfilled: true,
    },
  
    {
      id: 4,
      type: 'Medication',
      title: 'Actonel',
      quantity_requested: 9,
      quantity_fulfilled: 3,
      description: 'Used in the prevention and treatment of osteoporosis.',
      image: actonel,
      fulfilled: true,
    },
    // Add more sample data as needed
  ];
  return (
    <>
      <Navbar />
      <PostCard />
      <OrgPost posts={posts}/>
      <SchedulePicker />
      <TransportationPicker />
      <ScheduleDropoff />
      <Router>
        {/* <RequestCard /> */}
        <RedirectionButton title="New Post" />
        <LoginRedirect title="Log in as an admin" />
        <Routes>
          <Route path="admin" element={<AdminPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
