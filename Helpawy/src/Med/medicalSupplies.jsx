import React, { useState } from 'react';
import './medicalSupplies.css';
import ecgMachine from '../assets/ecg_machine.jpg';
import ventilator from '../assets/ventilator.jpg';
import diazepam from '../assets/diazepam.jpg';
import actonel from "../assets/actonel.jpg";
import Popup from './Popup';

const MedicalSuppliesComponent = () => {
  const [medicalSuppliesData, setMedicalSuppliesData] = useState([
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
    {
      id: 3,
      type: 'Medication',
      name: 'Diazepam',
      quantity: 5,
      description: 'Used to treat anxiety, seizures, alcohol withdrawal syndrome, and muscle spasms.',
      image: diazepam, 
    },
    {
      id: 4,
      type: 'Medication',
      name: 'Actonel',
      quantity: 5,
      description: 'Used in the prevention and treatment of osteoporosis.',
      image: actonel, 
    },
    // Add more sample data as needed
  ]);

  const [filterType, setFilterType] = useState('All'); // Initial filter type
  const [selectedRequest, setSelectedRequest] = useState(null); // For viewing details
  const [showPopup, setShowPopup] = useState(false); // For showing/hiding the popup

  // Function to handle filter option change
  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  // Function to handle click on an item request to view details
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
  const handleDonate = (donatedAmount) => {
    if (donatedAmount === 0) {
      alert("You must enter an amount to donate.");
      return;
    }

    if (donatedAmount >= selectedRequest.quantity) {
      // Remove the request as it is fulfilled
      setMedicalSuppliesData(prevData => prevData.filter(item => item.id !== selectedRequest.id));
    } else {
      // Decrease the quantity of the request
      setMedicalSuppliesData(prevData => prevData.map(item => {
        if (item.id === selectedRequest.id) {
          return { ...item, quantity: item.quantity - donatedAmount };
        }
        return item;
      }));
    }

    handleCloseDetails();
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
          {/* Add more options as needed */}
        </select>
      </div>

      {/* Display filtered medical supplies donation requests */}
      <div className="medical-supplies-list">
        {medicalSuppliesData
          .filter((item) => filterType === 'All' || item.type === filterType)
          .map((request) => (
            <div key={request.id} className="medical-supplies-item" onClick={() => handleViewDetails(request)}>
              <h2>{request.name}</h2>
              <p>Type: {request.type}</p>
              <p>Quantity: {request.quantity}</p>
            </div>
          ))}
      </div>

      {/* Popup */}
      {showPopup && (
        <Popup
          selectedRequest={selectedRequest}
          onClose={handleCloseDetails}
          onDonate={handleDonate}
        />
      )}
    </div>
  );
}

export default MedicalSuppliesComponent;
