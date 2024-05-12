import React from 'react';
import './BloodPopup.css';
import Location from '../assets/HILmr.png';
import { GoogleMap,Marker, LoadScript } from '@react-google-maps/api';

const BloodPopup = ({ selectedRequest, onClose, showLocationImage, handleViewLocation }) => {

  const mapStyles = {
    height: "400px",
    width: "100%"
  };

  const bloodDonationRequests = [
    { id: 1, hospital: 'Hospital A', amountNeeded: '3 pints', typeNeeded: 'Type A', urgency: 'Concerning', governorate: 'Ismailia', area: 'Area 1', patientName: 'John Doe', bloodType: 'A+', hospitalAddress: '123 Main St', coordinates: {lat: 31.2525588, lng: 29.9766823} },
    { id: 2, hospital: 'Hospital B', amountNeeded: '2 pints', typeNeeded: 'Type B', urgency: 'Normal', governorate: 'Alexandria', area: 'Area 2', patientName: 'Jane Smith', bloodType: 'B+', hospitalAddress: '456 Elm St', coordinates: {lat: 31.2525588, lng: 29.9766823} },
    { id: 3, hospital: 'Hospital C', amountNeeded: '5 pints', typeNeeded: 'Type AB', urgency: 'Critical', governorate: 'Cairo', area: 'Area 3', patientName: 'Alice Johnson', bloodType: 'AB+', hospitalAddress: '789 Oak St', coordinates: {lat: 31.2525588, lng: 29.9766823} },
    // Add more dummy data as needed
  ];

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
          <LoadScript googleMapsApiKey="AIzaSyAdzaGmL_O_WXhUqyDe-EPm9qp6f2iHrek">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={14}
          center={selectedRequest.coordinates}
        >
          <Marker position={selectedRequest.coordinates} />
        </GoogleMap>
      </LoadScript>
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
