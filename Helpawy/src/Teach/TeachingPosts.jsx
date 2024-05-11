import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TeachingPosts.css';

const teachers = [
  { id: 1, name: 'Math Teacher', subject: 'Math', teachingAreas: 'Madinaty', governorate: 'Cairo' },
  { id: 2, name: 'English Teacher', subject: 'English', teachingAreas: 'Sheikh Zayed', governorate: 'Giza' },
  { id: 3, name: 'Physics Teacher', subject: 'Physics', teachingAreas: 'Sidi Bishr', governorate: 'Alexandria' },
];

const TeacherList = () => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredTeachers = teachers.filter(teacher => {
    return teacher.subject.toLowerCase().includes(filter.toLowerCase()) ||
           teacher.teachingAreas.toLowerCase().includes(filter.toLowerCase()) ||
           teacher.governorate.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div className="teacher-list-container">
      <h1>Teachers</h1>
      <input type="text" value={filter} onChange={handleFilterChange} placeholder="Filter by subject, area, or governorate" />
      <ul>
        {filteredTeachers.map(teacher => (
          <li key={teacher.id}>
            <Link to={`/teachers/${teacher.id}`} className="teacher-link">{teacher.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeacherList;
