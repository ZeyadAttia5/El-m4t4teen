import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from './App';
import ReactDOM from 'react-dom';
import TeacherForm from './TeacherForm';
import BookSelection from './BookSelection';
import BookDetails from './BookDetails';
import TeachingPosts from './TeachingPosts';
import TeacherDetails from './TeachingDetails';
import StationaryLists from './StationaryLists';
import StationaryDetails from './StationaryDetails';

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/teacher-form" element={<TeacherForm />} />
        <Route path="/" element={<BookSelection />} />
        <Route path="/book-selection" element={<BookSelection />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/teaching-posts" element={<TeachingPosts />} />
        <Route path="/" element={<TeachingPosts />} />
        <Route path="/teachers/:id" element={<TeacherDetails />} />
        <Route path="/teaching-details" element={<TeacherDetails />} />
        <Route path="/stationary-lists" element={<StationaryLists />} />
        <Route path="/" element={<StationaryLists />} />
        <Route path="/items/:id" element={<StationaryDetails />} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));
export default Main;


