import React, { useState } from 'react';
import './FoodPopup.css'; // Assuming you have a CSS file named FoodPopup.css
import meals from '../assets/Meals.jpg';
import baked from '../assets/cannedgoods and bread.jpg';
import fruits from '../assets/fruits and vegetables.jpg';

const FoodPopup = ({ selectedRequest, onClose, onDonate }) => {
  const [donatedQuantity, setDonatedQuantity] = useState(0);

  const handleQuantityChange = (event) => {
    setDonatedQuantity(parseInt(event.target.value));
  };
  const typeToImage = {
    'Fruits and vegetables': fruits,
    'Fresh meals': meals,
    'Canned foods': baked,
    'Baked goods': baked
  };
  
  return (
    <div className="food-popup-overlay">
      <div className="food-popup-content">
        <button className="close-food-popup" onClick={onClose}>&times;</button>
        {selectedRequest && (
          <div>
            {console.log(selectedRequest)}
            <h2>{selectedRequest.recipient}</h2>
            {selectedRequest.items.map((item, index) => (
              <div key={index}>
                <p>{item.name}: {item.quantity}</p>
                <img src={typeToImage[item.type]} alt={item.type} height="100"/>
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
              <button className="donate-button" onClick={() => onDonate(donatedQuantity)}>Donate</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodPopup;
