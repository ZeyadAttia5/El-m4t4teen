import React, { useState } from 'react';

// Dummy data for blood donation requests
const bloodDonationRequests = [
  { id: 1, hospital: 'Hospital A', amountNeeded: '3 pints', typeNeeded: 'Type A', urgency: 'Urgent', governorate: 'Governorate A', area: 'Area 1' },
  { id: 2, hospital: 'Hospital B', amountNeeded: '2 pints', typeNeeded: 'Type B', urgency: 'Normal', governorate: 'Governorate B', area: 'Area 2' },
  { id: 3, hospital: 'Hospital C', amountNeeded: '5 pints', typeNeeded: 'Type AB', urgency: 'Critical', governorate: 'Governorate C', area: 'Area 3' },
  // Add more dummy data as needed
];

function BloodDonationComponent() {
  const [filterOptions, setFilterOptions] = useState({
    hospital: '',
    governorate: '',
    area: ''
  });

  // Function to handle filter option change
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilterOptions({
      ...filterOptions,
      [name]: value
    });
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
      <h1>Blood Donation Requests</h1>

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
            <h3>{request.hospital}</h3>
            <p>Amount Needed: {request.amountNeeded}</p>
            <p>Type Needed: {request.typeNeeded}</p>
            <p>Urgency: {request.urgency}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BloodDonationComponent;
