import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TeachingDashboard from './Teach/TeachingDashboard.jsx';
import TeacherForm from './Teach/TeacherForm.jsx';
import BookSelection from './Teach/BookSelection.jsx';
import StationaryLists from './Teach/StationaryLists.jsx';
import TeachingPosts from './Teach/TeachingPosts.jsx';
import TeacherDetails from './Teach/TeachingDetails.jsx';
import BookDetails from './Teach/BookDetails.jsx';
import StationaryDetails from './Teach/StationaryDetails.jsx';

function App() {
 
 

  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<TeachingDashboard/>} />

        <Route path="/teacher-form" element={<TeacherForm />} />

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
    
   
  );
}

export default App;