import React, { useState } from 'react';
import './ScheduleDropoff.css';
const SchedulePicker = ({ onSelectTimeSlot }) => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

  const handleSelectTimeSlot = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
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

export default SchedulePicker;
