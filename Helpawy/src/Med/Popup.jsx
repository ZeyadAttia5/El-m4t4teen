import React from 'react';
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Popup.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const Popup = ({ selectedRequest, onClose, onDonate }) => {


  const navigate = useNavigate();

  const handleDonate = () => {
    navigate('/DonateSchedPicker'); 
  };
  const [donatedAmount, setDonatedAmount] = useState(0);

  const handleDonationChange = (event) => {
    setDonatedAmount(parseInt(event.target.value));
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-popup" onClick={onClose}>&times;</button>
        {selectedRequest && (
          <div>
            <h2>{selectedRequest.name}</h2>
            <p>Type: {selectedRequest.type}</p>
            <p>Quantity: {selectedRequest.quantity}</p>
            <p>{selectedRequest.description}</p>
            <div className="lowerpart">
              <img className='medsupimg' src={selectedRequest.image} alt={selectedRequest.name} />
              <p>Enter the Quantity You Would like to Donate Below:</p>
              <input
                type="number"
                min="0"
                max={selectedRequest.quantity}
                value={donatedAmount}
                onChange={handleDonationChange}
              />
              <button className="button donate" onClick={() => { handleDonate(); onDonate(donatedAmount);}} >Donate</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
