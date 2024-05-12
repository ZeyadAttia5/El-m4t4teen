import React, { useState } from 'react';
import './Popup.css';
import { useNavigate } from 'react-router-dom';
const Popup = ({ selectedItem, onClose, onDonate }) => {
  const [donatedQuantity, setDonatedQuantity] = useState(0);

  const navigate = useNavigate();

  const handleDonate = () => {
    navigate('/DonateSchedPicker'); 
  };
  const handleQuantityChange = (event) => {
    setDonatedQuantity(parseInt(event.target.value));
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-popup" onClick={onClose}>&times;</button>
        {selectedItem && (
          <div>
            <h2>{selectedItem.recipient}</h2>
            <p>Age Range: {selectedItem.ageRange}</p>
            <p>Preferences: {selectedItem.preferences}</p>
            <p>Quantity Available: {selectedItem.quantity}</p>
            <div>
              <p>Enter the Quantity You Would like to Donate Below:</p>
              <input
                type="number"
                min="0"
                max={selectedItem.quantity}
                value={donatedQuantity}
                onChange={handleQuantityChange}
              />
              <button className="donate-button" onClick={() => {onDonate(donatedQuantity); handleDonate()}}>Donate</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
