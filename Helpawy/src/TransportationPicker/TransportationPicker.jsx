import { useState } from 'react';
import './TransportationPicker.css'; // Import the CSS file for styling

const TransportationPicker = ({ onSelectTransportation }) => {
  const [selectedTransportation, setSelectedTransportation] = useState('');

  const handleSelectTransportation = (transportation) => {
    setSelectedTransportation(transportation);
    onSelectTransportation(transportation);
  };

  return (
    <div className="transportation-container">
      <h2>Choose Transportation Type</h2>
      <div className="transportation-options">
        <div
          className={`transportation-option ${selectedTransportation === 'truck' ? 'selected' : ''}`}
          onClick={() => handleSelectTransportation('truck')}
        >
          Truck
        </div>
        <div
          className={`transportation-option ${selectedTransportation === 'car' ? 'selected' : ''}`}
          onClick={() => handleSelectTransportation('car')}
        >
          Car
        </div>
        <div
          className={`transportation-option ${selectedTransportation === 'motorcycle' ? 'selected' : ''}`}
          onClick={() => handleSelectTransportation('motorcycle')}
        >
          Motorcycle
        </div>
      </div>
    </div>
  );
};

export default TransportationPicker;