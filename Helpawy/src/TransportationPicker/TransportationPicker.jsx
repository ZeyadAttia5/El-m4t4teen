import { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './TransportationPicker.css'; // Import the CSS file for styling

const TransportationPicker = () => {
  const [selectedTransportation, setSelectedTransportation] = useState('');

  const handleSelectTransportation = (transportation) => {
    setSelectedTransportation(transportation);
  };

  const navigate = useNavigate();
  const handleConfirmBtn = () => {
    navigate('/HomePage');
  }

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
        <div className='confirm-btn-container'>
            <Button className='confirm-btn' onClick={handleConfirmBtn}>Confirm</Button>
          </div>
      </div>
    </div>
  );
};

export default TransportationPicker;