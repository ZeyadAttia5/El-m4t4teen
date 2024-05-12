import React, { useState } from 'react';
import './Toys.css';
import Popup from './Popup';

const ToyDonationComponent = () => {
  const [toyData, setToyData] = useState([
    {
      id: 1,
      recipient: "Children's Hospital",
      ageRange: '3-5 years',
      preferences: 'Educational toys, stuffed animals',
      quantity: 10,
      category: 'stuffed toys',
      gender: 'Unisex',
    },
    {
      id: 2,
      recipient: 'Local Orphanage',
      ageRange: '6-10 years',
      preferences: 'Board games, art supplies',
      quantity: 7,
      category: 'board games',
      gender: 'Male',
    },
    {
      id: 3,
      recipient: 'Homeless Shelter',
      ageRange: '0-2 years',
      preferences: 'Soft toys, baby rattles',
      quantity: 15,
      category: 'stuffed toys',
      gender: 'Female',
    },
  ]);

  const [selectedToy, setSelectedToy] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [ageFilter, setAgeFilter] = useState('All');
  const [genderFilter, setGenderFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const handleViewDetails = (toy) => {
    setSelectedToy(toy);
    setShowPopup(true);
  };

  const handleCloseDetails = () => {
    setSelectedToy(null);
    setShowPopup(false);
  };

  const handleDonate = (donatedAmount) => {
    if (donatedAmount === 0 || donatedAmount > selectedToy.quantity) {
      alert("Invalid quantity entered.");
      return;
    }

    const updatedToyData = toyData.map(toy => {
      if (toy.id === selectedToy.id) {
        return { ...toy, quantity: toy.quantity - donatedAmount };
      }
      return toy;
    });

    setToyData(updatedToyData);
    handleCloseDetails();
  };

  return (
    <div className="toy-donation-component">
      <h1>Toy Donation Requests</h1>

      <div className="filter-options">
        {/* Age Filter */}
        <select value={ageFilter} onChange={(e) => setAgeFilter(e.target.value)}>
          <option value="All">All Ages</option>
          <option value="0-2 years">0-2 years</option>
          <option value="3-5 years">3-5 years</option>
          <option value="6-10 years">6-10 years</option>
          {/* Add more age ranges as needed */}
        </select>

        {/* Gender Filter */}
        <select value={genderFilter} onChange={(e) => setGenderFilter(e.target.value)}>
          <option value="All">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unisex">Unisex</option>
        </select>

        {/* Category Filter */}
        <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
          <option value="All">All Categories</option>
          <option value="board games">Board Games</option>
          <option value="stuffed toys">Stuffed Toys</option>
          {/* Add more categories as needed */}
        </select>
      </div>

      <div className="toy-list">
        {toyData
          .filter(toy => (ageFilter === 'All' || toy.ageRange === ageFilter) && 
                         (genderFilter === 'All' || toy.gender === genderFilter) &&
                         (categoryFilter === 'All' || toy.category === categoryFilter))
          .map((toy) => (
            <div key={toy.id} className="toy-item" onClick={() => handleViewDetails(toy)}>
              <h2>{toy.recipient}</h2>
              <p>Age Range: {toy.ageRange}</p>
              <p>Preferences: {toy.preferences}</p>
              <p>Quantity: {toy.quantity}</p>
              <p>Gender: {toy.gender}</p>
            </div>
          ))}
      </div>

      {showPopup && (
        <Popup
          selectedItem={selectedToy}
          onClose={handleCloseDetails}
          onDonate={handleDonate}
        />
      )}
    </div>
  );
};

export default ToyDonationComponent;
