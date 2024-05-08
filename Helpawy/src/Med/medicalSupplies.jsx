import React, { useState } from 'react';
import './medicalSupplies.css';
import ecgMachine from '../assets/ecg_machine.jpg';
import ventilator from '../assets/ventilator.jpg';

const medicalSuppliesData = [
  // Sample data for medical supplies donation requests
  {
    id: 1,
    type: 'Medical Device',
    name: 'ECG Machine',
    quantity: 3,
    description: 'Portable ECG Machine with 12-lead monitoring capability.',
    image: ecgMachine, 
  },
  {
    id: 2,
    type: 'Medical Equipment',
    name: 'Ventilator',
    quantity: 2,
    description: 'Advanced ICU ventilator with built-in oxygen concentrator.',
    image: ventilator, 
  },
  // Add more sample data as needed
];

function MedicalSuppliesComponent() {
  const [filterType, setFilterType] = useState('All'); // Initial filter type
  const [selectedRequest, setSelectedRequest] = useState(null); // For viewing details
  const [donateAmount, setDonateAmount] = useState(0); // For tracking donation amount
  const [showPopup, setShowPopup] = useState(false); // For showing/hiding the popup

  // Function to handle filter option change
  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  // Function to handle click on "View Details" button
  const handleViewDetails = (request) => {
    setSelectedRequest(request);
  };

  // Function to close the view details component
  const handleCloseDetails = () => {
    setSelectedRequest(null);
  };

  // Function to handle donate now button click
  const handleDonateNow = () => {
    setShowPopup(true);
  };

  // Function to handle donation confirmation
  const handleDonateConfirm = () => {
    // Here you can handle the donation confirmation logic
    setShowPopup(false);
  };

  // Function to handle donation amount change
  const handleDonateAmountChange = (event) => {
    const amount = parseInt(event.target.value);
    setDonateAmount(amount);
  };

  return (
    <div className="medical-supplies-component">
      <h1>Medical Supplies Donation Requests</h1>

      {/* Filter options */}
      <div className="filter-options">
        <select value={filterType} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="Medical Device">Medical Device</option>
          <option value="Medical Equipment">Medical Equipment</option>
          <option value="Medication">Medication</option>
        </select>
      </div>

      {/* Display filtered medical supplies donation requests */}
      <div className="medical-supplies-list">
        {medicalSuppliesData
          .filter((item) => filterType === 'All' || item.type === filterType)
          .map((request) => (
            <div key={request.id} className="medical-supplies-item">
              <h2>{request.name}</h2>
              <p>Type: {request.type}</p>
              <p>Quantity: {request.quantity}</p>
              <button className="button" onClick={() => handleViewDetails(request)}>View Details</button>
            </div>
          ))}
      </div>

      {/* Display medical supplies details */}
      {selectedRequest && (
        <div className="medical-supplies-details">
          <button className="button close-details-buttonSup" onClick={handleCloseDetails}>X</button>
          <div className="medical-supplies-header">
            <h2>Details of {selectedRequest.name}</h2>
          </div>
          <p>Type: {selectedRequest.type}</p>
          <p>Quantity: {selectedRequest.quantity}</p>
          <p>Description: {selectedRequest.description}</p>
          <div className="image-container">
            <img className="medsupimage" src={selectedRequest.image} alt={selectedRequest.name} />
            <button className="button donateNow" onClick={handleDonateNow}>Donate Now</button>
          </div>
          {/* Add quantity selection component here */}
        </div>
      )}

      {/* Donation Popup */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-popup" onClick={() => setShowPopup(false)}>&times;</span>
            <h2>{selectedRequest.name}</h2>
            <p>Quantity Needed: {selectedRequest.quantity}</p>
            <input
              type="number"
              min="0"
              max={selectedRequest.quantity}
              value={donateAmount}
              onChange={handleDonateAmountChange}
            />
            <button className="button" onClick={handleDonateConfirm}>Donate</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MedicalSuppliesComponent;
