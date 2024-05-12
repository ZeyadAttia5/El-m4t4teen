import React, { useState } from 'react';
import './FoodPopup.css'; // Assuming you have a CSS file named FoodPopup.css
import { useNavigate } from 'react-router-dom';
const FoodPopup = ({ selectedRequest, onClose, onDonate }) => {
  const navigate = useNavigate();

  const handleDonate = () => {
    navigate('/DonateSchedPicker'); 
  };
  const [donatedQuantity, setDonatedQuantity] = useState(0);

  const handleQuantityChange = (event) => {
    setDonatedQuantity(parseInt(event.target.value));
  };

  return (
    <div className="food-popup-overlay">
      <div className="food-popup-content">
        <button className="close-food-popup" onClick={onClose}>&times;</button>
        {selectedRequest && (
          <div>
            <h2>{selectedRequest.recipient}</h2>
            {selectedRequest.items.map((item, index) => (
              <div key={index}>
                <p>{item.name}: {item.quantity}</p>
              </div>
            ))}
            <div>
              <p>Enter the Quantity You Would like to Donate Below:</p>
              <input
                type="number"
                min="0"
                max={selectedRequest.items.reduce((acc, item) => acc + parseInt(item.quantity), 0)}
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

export default FoodPopup;
