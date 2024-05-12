import React from 'react';
import './MedicalCaseDetailsPopup.css'; // Import CSS file
import { GoogleMap,Marker, LoadScript } from '@react-google-maps/api';
MedicalCaseDetailsPopup.css
const MedicalCaseDetailsPopup = ({ selectedCase, onClose, onFulfillCase }) => {

  const mapStyles = {
    height: "400px",
    width: "100%"
  };

  return (
    <div className="overlay">
      <div className="popup">
        <button className="CaseClose close-details-button" onClick={onClose}>X</button>
        <h2>{selectedCase.patientName}</h2>
        <p>Age: {selectedCase.age}, Gender: {selectedCase.gender}, Weight: {selectedCase.weight}</p>
        <p>Area: {selectedCase.area}</p>
        <p>Governorate: {selectedCase.governorate}</p>
        <LoadScript googleMapsApiKey="AIzaSyAdzaGmL_O_WXhUqyDe-EPm9qp6f2iHrek">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={14}
          center={selectedCase.coordinates}
        >
          <Marker position={selectedCase.coordinates} />
        </GoogleMap>
      </LoadScript>
        <p>Organization: {selectedCase.organizationName}</p>
        <p>Medical Specialty: {selectedCase.medicalSpecialty}</p>
        <p>Description: {selectedCase.caseDescription}</p>
        <button className="button" onClick={() => onFulfillCase(selectedCase.id)}>Fulfill Case</button>
      </div>
    </div>
  );
};

export default MedicalCaseDetailsPopup;
