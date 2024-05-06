import React, { useState } from 'react';
import './RequestCard.css';

const RequestCard = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [requestPosted, setRequestPosted] = useState(false);

  const categories = [
    'Clothes',
    'Toys',
    'Food',
    'Medical Supplies',
    'School Supplies',
    'Blood Donations'
  ];

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handlePostRequest = () => {
    // Add functionality to handle posting the request here
    console.log("Request posted!");
    setRequestPosted(true);
  };

  return (
    <div className="donation-request-card">
      <h3>Donation Request</h3>
      <div className="category-dropdown">
        <label htmlFor="category">Category:</label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Select a category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>
      {/* Additional fields for donation request (e.g., description, quantity, etc.) can be added here */}
      <button onClick={handlePostRequest}>Post request</button>
      {requestPosted && <p>Request posted</p>}
    </div>
  );
};

export default RequestCard;
