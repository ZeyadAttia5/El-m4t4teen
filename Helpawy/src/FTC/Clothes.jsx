import React, { useState } from 'react';
import './Clothes.css'; // Assuming you have a CSS file named clothesDonations.css
import ClothesPopup from './ClothesPopup';

const ClothesDonationComponent = () => {
  const [clothesDonationRequests, setClothesDonationRequests] = useState([
    {
      id: 1,
      type: 'Shirt',
      age: 'Adult',
      gender: 'Male',
      season: 'Summer',
      material: 'Cotton',
      quantity: 100,
    },
    {
      id: 2,
      type: 'Dress',
      age: 'Child',
      gender: 'Female',
      season: 'Spring',
      material: 'Polyester',
      quantity: 50,
    },
    // Add more clothes donation requests as needed
    {
      id: 3,
      type: 'Jacket',
      age: 'Adult',
      gender: 'Female',
      season: 'Winter',
      material: 'Wool',
      quantity: 30,
    },
    {
      id: 4,
      type: 'Trousers',
      age: 'Adult',
      gender: 'Male',
      season: 'Fall',
      material: 'Denim',
      quantity: 70,
    },
  ]);

  const [ageFilter, setAgeFilter] = useState('All');
  const [genderFilter, setGenderFilter] = useState('All');
  const [seasonFilter, setSeasonFilter] = useState('All');
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  // Function to handle filter option change
  const handleFilterChange = (filterType, value) => {
    switch (filterType) {
      case 'age':
        setAgeFilter(value);
        break;
      case 'gender':
        setGenderFilter(value);
        break;
      case 'season':
        setSeasonFilter(value);
        break;
      default:
        break;
    }
  };

  // Function to handle click on a donation request to view details
  const handleViewDetails = (request) => {
    setSelectedRequest(request);
    setShowPopup(true);
  };

  // Function to close the view details component
  const handleCloseDetails = () => {
    setSelectedRequest(null);
    setShowPopup(false);
  };

  // Function to handle donation
  const handleDonate = (donatedQuantity) => {
    // Add your donation logic here
    // For simplicity, I'm just closing the popup
    handleCloseDetails();
  };

  return (
    <div className="clothes-donation-component">
      <h1>Clothes Donation Requests</h1>

      {/* Filter options */}
      <div className="filter-options">
        {/* Age Filter */}
        <select value={ageFilter} onChange={(e) => handleFilterChange('age', e.target.value)}>
          <option value="All">All Ages</option>
          <option value="Adult">Adult</option>
          <option value="Child">Child</option>
          {/* Add more age ranges as needed */}
        </select>

        {/* Gender Filter */}
        <select value={genderFilter} onChange={(e) => handleFilterChange('gender', e.target.value)}>
          <option value="All">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          {/* Add more gender options as needed */}
        </select>

        {/* Season Filter */}
        <select value={seasonFilter} onChange={(e) => handleFilterChange('season', e.target.value)}>
          <option value="All">All Seasons</option>
          <option value="Summer">Summer</option>
          <option value="Fall">Fall</option>
          <option value="Winter">Winter</option>
          <option value="Spring">Spring</option>
          {/* Add more season options as needed */}
        </select>
      </div>

      {/* Display filtered clothes donation requests */}
      <div className="clothes-donation-list">
        {clothesDonationRequests
          .filter((item) =>
            (ageFilter === 'All' || item.age === ageFilter) &&
            (genderFilter === 'All' || item.gender === genderFilter) &&
            (seasonFilter === 'All' || item.season === seasonFilter)
          )
          .map((request) => (
            <div key={request.id} className="clothes-donation-item" onClick={() => handleViewDetails(request)}>
              <h2>{request.type}</h2>
              <p>Age: {request.age}</p>
              <p>Gender: {request.gender}</p>
              <p>Season: {request.season}</p>
              <p>Material: {request.material}</p>
              <p>Quantity: {request.quantity}</p>
            </div>
          ))}
      </div>

      {/* Popup */}
      {showPopup && (
        <ClothesPopup
          selectedRequest={selectedRequest}
          onClose={handleCloseDetails}
          onDonate={handleDonate}
        />
      )}
    </div>
  );
};

export default ClothesDonationComponent;
