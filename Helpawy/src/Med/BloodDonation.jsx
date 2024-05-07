import React, { useState } from 'react';
import './BloodDonation.css';
import bloodDropImage from '../assets/blood-drop.png';
import Location from '../assets/HILmr.png';

// Dummy data for blood donation requests
const bloodDonationRequests = [
  { id: 1, hospital: 'Hospital A', amountNeeded: '3 pints', typeNeeded: 'Type A', urgency: 'Urgent', governorate: 'Governorate A', area: 'Area 1', patientName: 'John Doe', bloodType: 'A+', hospitalAddress: '123 Main St' },
  { id: 2, hospital: 'Hospital B', amountNeeded: '2 pints', typeNeeded: 'Type B', urgency: 'Normal', governorate: 'Governorate B', area: 'Area 2', patientName: 'Jane Smith', bloodType: 'B+', hospitalAddress: '456 Elm St' },
  { id: 3, hospital: 'Hospital C', amountNeeded: '5 pints', typeNeeded: 'Type AB', urgency: 'Critical', governorate: 'Governorate C', area: 'Area 3', patientName: 'Alice Johnson', bloodType: 'AB+', hospitalAddress: '789 Oak St' },
  // Add more dummy data as needed
];

function BloodDonationComponent() {
  const [filterOptions, setFilterOptions] = useState({
    hospital: '',
    governorate: '',
    area: ''
  });
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showLocationImage, setShowLocationImage] = useState(false); // New state variable

  // Function to handle filter option change
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilterOptions({
      ...filterOptions,
      [name]: value
    });
  };

  // Function to handle click on "View Details" button
  const handleViewDetails = (request) => {
    setSelectedRequest(request);
  };

  // Function to close the view details component
  const handleCloseDetails = () => {
    setSelectedRequest(null);
    setShowLocationImage(false); // Reset the state when closing details
  };

  // Function to handle click on "View Location" button
  const handleViewLocation = () => {
    setShowLocationImage(prevState => !prevState); // Toggle the state
  };

  // Filtered blood donation requests based on filter options
  const filteredRequests = bloodDonationRequests.filter(request => {
    return (
      (!filterOptions.hospital || request.hospital === filterOptions.hospital) &&
      (!filterOptions.governorate || request.governorate === filterOptions.governorate) &&
      (!filterOptions.area || request.area === filterOptions.area)
    );
  });

  return (
    <div className="blood-donation-component">
      <div className="title-wrapper">
        <h1>Blood Donation Requests</h1>
        <img src={bloodDropImage} alt="Blood Drop" className="blood-drop-image" />
      </div>

      {/* Filter options */}
      <div className="filter-options">
        <select name="hospital" value={filterOptions.hospital} onChange={handleFilterChange}>
          <option value="">Select Hospital</option>
          {/* Dummy options */}
          <option value="Hospital A">Hospital A</option>
          <option value="Hospital B">Hospital B</option>
          <option value="Hospital C">Hospital C</option>
        </select>
        <select name="governorate" value={filterOptions.governorate} onChange={handleFilterChange}>
          <option value="">Select Governorate</option>
          {/* Dummy options */}
          <option value="Governorate A">Governorate A</option>
          <option value="Governorate B">Governorate B</option>
          <option value="Governorate C">Governorate C</option>
        </select>
        <select name="area" value={filterOptions.area} onChange={handleFilterChange}>
          <option value="">Select Area</option>
          {/* Dummy options */}
          <option value="Area 1">Area 1</option>
          <option value="Area 2">Area 2</option>
          <option value="Area 3">Area 3</option>
        </select>
      </div>

      {/* Display filtered blood donation requests */}
      <div className="blood-requests">
        {filteredRequests.map(request => (
          <div key={request.id} className="blood-request">
            <div className="blood-request-details">
              <h3>{request.hospital}</h3>
              <p>Amount Needed: {request.amountNeeded}</p>
              <p>Type Needed: {request.typeNeeded}</p>
              <p>Urgency: {request.urgency}</p>
            </div>
            <button className="button view-details-button" onClick={() => handleViewDetails(request)}>View Details</button>
          </div>
        ))}
      </div>

      {/* Display blood donation details */}
      {selectedRequest && (
        <div className="blood-donation-details">
          <div className="blood-donation-header">
            <h2>Blood Donation Details</h2>
            <button className="button close-details-button" onClick={handleCloseDetails}>X</button>
          </div>
          <p>Patient Name: {selectedRequest.patientName}</p>
          <p>Blood Type: {selectedRequest.bloodType}</p>
          <p>Hospital Name: {selectedRequest.hospital}</p>
          <p>Hospital Area: {selectedRequest.area}</p>
          <p>Governorate: {selectedRequest.governorate}</p>
          <p>Hospital Address: {selectedRequest.hospitalAddress}</p>
          {showLocationImage && (
        <div className="location-image-wrapper">
          <img src={Location} alt="Location" className="location-image" />
        </div>
      )}
          <button className="button view-hospital-locations-button" onClick={handleViewLocation}>View Location</button>
        </div>
      )}

      
      
    </div>
  );
}

export default BloodDonationComponent;
