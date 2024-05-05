import React from 'react';
import './DonorView.css'

const DonorView = () => {
  // Array containing the list of donors
  const donors = ["Volunteer 1 (Math Teacher)", "Volunteer 2 (Science Teacher)", "Volunteer 3 (Doctor)"];

  return (
    <div>
      <h2>Donor List</h2>
      <ul>
        {donors.map((donor, index) => (
          <li key={index}>{donor}</li>
        ))}
      </ul>
    </div>
  );
};

export default DonorView;
