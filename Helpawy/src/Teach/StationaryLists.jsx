import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TeachingPosts.css';
import { useNavigate } from 'react-router-dom';
const teachers = [
  { id: 1, name: 'Physics Books'},
  { id: 2, name: 'Math Books' },
  { id: 3, name: 'Rulers' },
  { id: 4, name: '3 Subject Notebook' },
  { id: 5, name: '5 subject Notebook' },
  { id: 6, name: 'Blue pens' },
  { id: 7, name: 'Black pens' },
  { id: 8, name: 'Pencils' },
  { id: 9, name: 'Erasers' },
];

const StationaryLists = () => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredTeachers = teachers.filter(teacher => {
    return teacher.name.toLowerCase().includes(filter.toLowerCase())     
  });
  const navigate = useNavigate();

  return (
    <div className="teacher-list-container">
      <h1>Stationary Items</h1>
      <input type="text" value={filter} onChange={handleFilterChange} placeholder="Filter by name" />
      <ul>
        {filteredTeachers.map(item => (
          <li key={item.id}>
            <Link to={`/items/${item.id}`} className="teacher-link">{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StationaryLists;
