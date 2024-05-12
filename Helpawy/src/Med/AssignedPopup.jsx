import React from 'react';
import './AssignedPopup.css'; // Import CSS file

const AssignedPopup = ({ onClose }) => {
  return (
    <div className="overlayc">
      <div className="popup1">
        <button className="close-details-button" onClick={onClose}>X</button>
        <h2>Successfully Assigned</h2>
        <p>This patient has been successfully assigned to you.</p>
      </div>
    </div>
  );
};

export default AssignedPopup;
