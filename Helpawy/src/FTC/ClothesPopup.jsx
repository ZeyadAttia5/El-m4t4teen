import React, { useState } from 'react';
import './ClothesPopup.css';

import { useNavigate } from 'react-router-dom';

const ClothesPopup = ({ selectedRequest, onClose, onDonate }) => {
  const navigate = useNavigate();

  const handleDonate = () => {
    navigate('/DonateSchedPicker'); 
  };
  const [donatedQuantity, setDonatedQuantity] = useState(0);

  const handleQuantityChange = (event) => {
    setDonatedQuantity(parseInt(event.target.value));
  };

  return (
    <div className="clothes-popup-overlay">
      <div className="clothes-popup-content">
        <button className="close-clothes-popup" onClick={onClose}>&times;</button>
        {selectedRequest && (
          <div>
            <h2>{selectedRequest.type}</h2>
            <p>Age: {selectedRequest.age}</p>
            <p>Gender: {selectedRequest.gender}</p>
            <p>Season: {selectedRequest.season}</p>
            <p>Material: {selectedRequest.material}</p>
            <p>Quantity Available: {selectedRequest.quantity}</p>
            <div>
              <p>Enter the Quantity You Would like to Donate Below:</p>
              <input
                type="number"
                min="0"
                max={selectedRequest.quantity}
                value={donatedQuantity}
                onChange={handleQuantityChange}
              />
              <button className="donate-button" onClick={() => {onDonate(donatedQuantity); handleDonate}}>Donate</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClothesPopup;
