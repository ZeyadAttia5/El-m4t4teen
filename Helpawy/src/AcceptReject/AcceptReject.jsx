import React, { useState } from 'react';

const AcceptReject = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const organizations = ["Organization 4", "Organization 5", "Organization 6"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleAccept = () => {
    setMessage("Request accepted");
  };

  const handleReject = () => {
    setMessage("Request rejected");
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown}>View Requests</button>
      {isOpen && (
        <ul className="dropdown-list">
          {organizations.map((organization, index) => (
            <li key={index}>
              {organization}
              <div>
                <button onClick={handleAccept}>Accept</button> 
                <button onClick={handleReject}>Reject</button> 
              </div>
            </li>
          ))}
        </ul>
      )}
      {message && <p>{message}</p>}
    </div>
  );
};

export default AcceptReject;
