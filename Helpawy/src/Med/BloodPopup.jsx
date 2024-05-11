import React from 'react';
import './BloodPopup.css';
import Location from '../assets/HILmr.png';

const BloodPopup = ({ selectedRequest, onClose, showLocationImage, handleViewLocation }) => {
  return (
    <div className="blood-donation-details">
      <div className="blood-donation-header">
        <h2>Blood Donation Details</h2>
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
      <div className="button-container">
        <button className="button view-hospital-locations-button" onClick={handleViewLocation}>View Location</button>
        <button className="button close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default BloodPopup;
