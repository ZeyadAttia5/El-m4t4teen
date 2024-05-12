import React from 'react';
import './TeachingDashboard.css';
import { useNavigate } from 'react-router-dom';
import TeacherForm from './TeacherForm.jsx';
import TeacherList from './TeachingPosts.jsx';
import BookSelection from './BookSelection.jsx';
import StationaryLists from './StationaryLists.jsx';
import App from '../App.jsx';
import Navbar from '../donorNavbar/NavBar.jsx'

function TeachingDashboard() {
  const navigate = useNavigate();

  const teacherformclick = () => {
    navigate('/teacher-form'); // Navigate to the medical supplies route
  };

  const teacherpostsclick = () => {
    navigate('/teaching-posts'); // Navigate to the blood donation route
  };

  const bookselectionclick = () => {
    navigate('/book-selection'); // Navigate to the volunteer as doctor route
  };
  const stationarypostsclick = () => {
    navigate('/stationary-lists'); // Navigate to the volunteer as doctor route
  };
  return (
    <>
      <Navbar/>
      <div className="dashboard">

        <h1>Welcome to the Teaching Donation Dashboard</h1>
        <div className="dashboard-options">
          <div className="dashboard-option medical-supplies" onClick={teacherformclick}>
            <h2>Teacher Form</h2>
            <p>Apply as a Teacher.</p>
          </div>
          <div className="dashboard-option blood-donation" onClick={teacherpostsclick}>
            <h2>Teacher Posts</h2>
            <p>Check Teacher Posts.</p>
          </div>
          <div className="dashboard-option doctor-visit" onClick={bookselectionclick}>
            <h2>Book Posts</h2>
            <p>Check Book Posts.</p>
          </div>

          <div className="dashboard-option doctor-visit1" onClick={stationarypostsclick}>
            <h2>Stationary Posts</h2>
            <p>Check Stationary Posts.</p>
          </div>

        </div>
      </div>



    </>


  );
}

export default TeachingDashboard;
