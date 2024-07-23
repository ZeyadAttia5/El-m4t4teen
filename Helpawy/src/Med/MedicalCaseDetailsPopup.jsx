import React from 'react';
import './MedicalCaseDetailsPopup.css'; // Import CSS file
import Location from '../assets/HILmr.png';

const MedicalCaseDetailsPopup = ({ selectedCase, onClose, onFulfillCase }) => {
  return (
    <div className="overlay">
      <div className="popup">
        <button className="CaseClose close-details-button" onClick={onClose}>X</button>
        <h2>{selectedCase.patientName}</h2>
        <p>Age: {selectedCase.age}, Gender: {selectedCase.gender}, Weight: {selectedCase.weight}</p>
        <p>Area: {selectedCase.area}</p>
        <p>Governorate: {selectedCase.governorate}</p>
        <img src={Location} alt="Location" className="location-image" />
        <p>Organization: {selectedCase.organizationName}</p>
        <p>Medical Specialty: {selectedCase.medicalSpecialty}</p>
        <p>Description: {selectedCase.caseDescription}</p>
        <button className="button" onClick={() => onFulfillCase(selectedCase.id)}>Fulfill Case</button>
      </div>
    </div>
  );
};

export default MedicalCaseDetailsPopup;
