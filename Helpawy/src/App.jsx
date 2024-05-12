import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TeachingDashboard from './Teach/TeachingDashboard.jsx';
import TeacherForm from './Teach/TeacherForm.jsx';
import TeacherList from './Teach/TeachingPosts.jsx';
import BookSelection from './Teach/BookSelection.jsx';
import StationaryLists from './Teach/StationaryLists.jsx';

function App() {
 
 

  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<TeachingDashboard/>} />
        <Route path="/teacher-form" element={<TeacherForm />} />
        <Route path="/teaching-posts" element={<TeacherList />} />
        <Route path="/book-selection" element={<BookSelection />} />
        <Route path="/stationary-lists" element={<StationaryLists />} />
      </Routes>
    </Router>
    
   
  );
}

export default App;