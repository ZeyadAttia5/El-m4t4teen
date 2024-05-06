import React, { useState } from 'react';
import './DonorView.css'

const DonorView = () => {
  // Array containing the list of donors
  const donors = ["Volunteer 1 (Math Teacher)", "Volunteer 2 (Science Teacher)", "Volunteer 3 (Doctor)"];

  // State to track which donor's information is being downloaded
  const [downloadedDonor, setDownloadedDonor] = useState(null);

  // Function to handle download button click
  const handleDownload = (donor) => {
    setDownloadedDonor(donor);
  };

  return (
    <div>
      <h2>Donor List</h2>
      <ul>
        {donors.map((donor, index) => (
          <li key={index}>
            {donor}
            <button onClick={() => handleDownload(donor)}>Download information</button> 
            {downloadedDonor === donor && <span>Done</span>} {/* Print 'Done' if this donor's information was downloaded */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonorView;
