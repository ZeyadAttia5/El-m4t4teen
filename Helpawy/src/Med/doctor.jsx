import React, { useState } from 'react';
import './doctor.css'; // Import CSS file
import MedicalCaseDetailsPopup from "./MedicalCaseDetailsPopup.jsx";
import AssignedPopup from "./AssignedPopup.jsx"; // Import the new popup component
import { GoogleMap,Marker, LoadScript } from '@react-google-maps/api';
// Sample medical cases data
const medicalCasesData = [
  {
    id: 1,
    patientName: 'John Doe',
    age: 45,
    gender: 'Male',
    governorate: 'Alexandria',
    area: 'Downtown',
    weight: 70,
    location: { lat: 123, lng: 456 },
    address: '123 Main St, Alexandria, Country',
    organizationName: 'Medical Center',
    medicalSpecialty: 'Cardiology',
    caseDescription: 'Patient needs heart surgery.',
    coordinates: {lat: 31.2525588, lng: 29.9766823}
  },
  {
    id: 2,
    patientName: 'Jane Doe',
    age: 35,
    gender: 'Female',
    governorate: 'Cairo',
    area: 'Suburbs',
    weight: 65,
    location: { lat: 123, lng: 456 },
    address: '456 Elm St, Cairo, Country',
    organizationName: 'Hospital XYZ',
    medicalSpecialty: 'Orthopediology',
    caseDescription: 'Patient needs bone treatment.',
    coordinates: {lat: 31.2525588, lng: 29.9766823}
  },
  // Add more medical cases as needed
];

const MedicalCasesComponent = () => {
  const [filterCriteria, setFilterCriteria] = useState({
    specialty: '',
    organization: '',
    area: '',
    governorate: '',
  });
  const [selectedCase, setSelectedCase] = useState(null);
  const [showAssignedPopup, setShowAssignedPopup] = useState(false); // New state for the assigned popup

  // Function to handle changes in filter criteria
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilterCriteria({ ...filterCriteria, [name]: value });
  };

  // Function to handle click on a medical case to view details
  const handleViewDetails = (caseId) => {
    const caseDetails = medicalCasesData.find((caseItem) => caseItem.id === caseId);
    setSelectedCase(caseDetails);
  };

  // Function to handle choosing to fulfill a medical case
  const handleFulfillCase = (caseId) => {
    // Logic to fulfill the medical case
    console.log(`Fulfilling medical case with ID: ${caseId}`);

    // Close the details popup and remove the case from the possible cases
    setSelectedCase(null);
    medicalCasesData.splice(medicalCasesData.findIndex((caseItem) => caseItem.id === caseId), 1);

    // Show the assigned popup
    setShowAssignedPopup(true);
  };

  // Extract unique values for medical specialty, organization, area, and governorate
  const uniqueSpecialties = Array.from(new Set(medicalCasesData.map((caseItem) => caseItem.medicalSpecialty)));
  const uniqueOrganizations = Array.from(new Set(medicalCasesData.map((caseItem) => caseItem.organizationName)));
  const uniqueAreas = Array.from(new Set(medicalCasesData.map((caseItem) => caseItem.area)));
  const uniqueGovernorates = Array.from(new Set(medicalCasesData.map((caseItem) => caseItem.governorate)));

  return (
    <div className="medical-cases-component">
      <h1>View Medical Cases</h1>

      {/* Filter options */}
      <div className="filter-options">
        <select name="specialty" value={filterCriteria.specialty} onChange={handleFilterChange}>
          <option value="">Select Medical Specialty</option>
          {uniqueSpecialties.map((specialty) => (
            <option key={specialty} value={specialty}>{specialty}</option>
          ))}
        </select>
        <select name="organization" value={filterCriteria.organization} onChange={handleFilterChange}>
          <option value="">Select Organization</option>
          {uniqueOrganizations.map((organization) => (
            <option key={organization} value={organization}>{organization}</option>
          ))}
        </select>
        <select name="area" value={filterCriteria.area} onChange={handleFilterChange}>
          <option value="">Select Area</option>
          {uniqueAreas.map((area) => (
            <option key={area} value={area}>{area}</option>
          ))}
        </select>
        <select name="governorate" value={filterCriteria.governorate} onChange={handleFilterChange}>
          <option value="">Select Governorate</option>
          {uniqueGovernorates.map((governorate) => (
            <option key={governorate} value={governorate}>{governorate}</option>
          ))}
        </select>
      </div>

      {/* Display filtered medical cases */}
      <div className="medical-cases-list">
        {medicalCasesData
          .filter((caseItem) => (
            (!filterCriteria.specialty || caseItem.medicalSpecialty.toLowerCase().includes(filterCriteria.specialty.toLowerCase())) &&
            (!filterCriteria.organization || caseItem.organizationName.toLowerCase().includes(filterCriteria.organization.toLowerCase())) &&
            (!filterCriteria.area || caseItem.area.toLowerCase() === filterCriteria.area.toLowerCase()) &&
            (!filterCriteria.governorate || caseItem.governorate.toLowerCase() === filterCriteria.governorate.toLowerCase())
          ))
          .map((caseItem) => (
            <div key={caseItem.id} className="medical-case-item" onClick={() => handleViewDetails(caseItem.id)}>
              <h2>{caseItem.patientName}</h2>
              <p>Age: {caseItem.age}, Gender: {caseItem.gender}</p>
              <p>Area: {caseItem.area}</p>
              <p>Governorate: {caseItem.governorate}</p>
              <p>Location: {caseItem.address}</p>
            </div>
          ))}
      </div>

      {/* Display details of selected medical case */}
      {selectedCase && (
        <MedicalCaseDetailsPopup
          selectedCase={selectedCase}
          onClose={() => setSelectedCase(null)}
          onFulfillCase={handleFulfillCase}
        />
      )}

      {/* Display assigned popup */}
      {showAssignedPopup && (
        <AssignedPopup onClose={() => setShowAssignedPopup(false)} />
      )}
    </div>
  );
};

export default MedicalCasesComponent;
