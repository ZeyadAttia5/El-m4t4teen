import { useState } from 'react';
import './ScheduleDropoff.css';
import { useNavigate } from 'react-router-dom';
import propTypes from 'prop-types';

const SchedulePicker = ({ onSelectTimeSlot }) => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const navigate = useNavigate();

  const handleSelectTimeSlot = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
    navigate('/OrgSendAppreciation');
    onSelectTimeSlot(timeSlot);
  };

  const timeSlots = ['Morning (9am - 12pm)', 'Afternoon (12pm - 3pm)', 'Evening (3pm - 6pm)'];

  return (
    <div>
      <h2>Select Dropoff Time Slot</h2>
      <div>
        {timeSlots.map((timeSlot) => (
          <div
            key={timeSlot}
            className={`time-slot ${selectedTimeSlot === timeSlot ? 'selected' : ''}`}
            onClick={() => handleSelectTimeSlot(timeSlot)}
          >
            {timeSlot}
          </div>
        ))}
      </div>
    </div>
  );
};

SchedulePicker.propTypes = {
  onSelectTimeSlot: propTypes.func.isRequired,
};

export default SchedulePicker;
