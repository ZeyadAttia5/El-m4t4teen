import React, { useState } from 'react';
import './Food.css'; // Assuming you have a CSS file named foodDonations.css
import FoodPopup from './FoodPopup';
import Navbar from '../donorNavbar/NavBar.jsx'

const FoodDonationComponent = () => {
  const [foodDonationRequests, setFoodDonationRequests] = useState([
    {
      id: 1,
      recipient: 'Local Food Bank',
      items: [
        { name: 'Canned goods', quantity: '50 items', type: 'Canned foods' },
        { name: 'Pasta', quantity: '20 lbs', type: 'Baked goods' },
        { name: 'Bread', quantity: '30 lbs', type: 'Baked goods' }
      ],
    },
    {
      id: 2,
      recipient: 'Homeless Shelter Kitchen',
      items: [
        { name: 'Prepared meals', quantity: 'Enough to serve 50 people', type: 'Fresh meals' }
      ],
    },
    {
      id: 3,
      recipient: 'Community Soup Kitchen',
      items: [
        { name: 'Fresh fruits', quantity: '20 kg', type: 'Fruits and vegetables' },
        { name: 'Fresh vegetables', quantity: '30 kg', type: 'Fruits and vegetables' }
      ],
    },
    // Add more food donation requests as needed
  ]);

  const [filterType, setFilterType] = useState('All'); // Initial filter type
  const [selectedRequest, setSelectedRequest] = useState(null); // For viewing details
  const [showPopup, setShowPopup] = useState(false); // For showing/hiding the popup

  // Function to handle filter option change
  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
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
  const handleDonate = () => {
    // Add your donation logic here
    // For simplicity, I'm just closing the popup
    handleCloseDetails();
  };

  // Function to filter food donation requests by type
  const filteredRequests = foodDonationRequests.filter((request) => {
    if (filterType === 'All') {
      return true;
    } else {
      return request.items.some((item) => item.type === filterType);
    }
  });

  return (
    <>
      <Navbar />
      <div className="food-donation-component">
        <h1>Food Donation Requests</h1>

        {/* Filter options */}
        <div className="filter-options">
          <select value={filterType} onChange={handleFilterChange}>
            <option value="All">All</option>
            <option value="Canned foods">Canned foods</option>
            <option value="Baked goods">Baked goods</option>
            <option value="Fresh meals">Fresh meals</option>
            <option value="Fruits and vegetables">Fruits and vegetables</option>
          </select>
        </div>

        {/* Display filtered food donation requests */}
        <div className="food-donation-list">
          {filteredRequests.map((request) => (
            <div key={request.id} className="food-donation-item" onClick={() => handleViewDetails(request)}>
              <h2>{request.recipient}</h2>
              {request.items.map((item, index) => (
                <div key={index}>
                  <p>{item.name}: {item.quantity}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Popup */}
        {showPopup && (
          <FoodPopup
            selectedRequest={selectedRequest}
            onClose={handleCloseDetails}
            onDonate={handleDonate}
          />
        )}
      </div>
    </>
  );
}

export default FoodDonationComponent;
