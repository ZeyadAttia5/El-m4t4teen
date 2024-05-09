import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CountDownTimerComponent from '../CountDownTimer/CountDownTimerComponent';
import './SchedulePicker.css';


const SchedulePicker = () => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  // const [showNotification, setShowNotification] = useState(false);
  const [timerKey, setTimerKey] = useState(0);

  const handleSelectTimeSlot = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
    // setShowNotification(false); // Reset notification visibility
    setTimerKey((prevKey) => prevKey + 1); // Reset timer key to restart the countdown
  };


  const timeSlots = ['Tomorrow Morning (9am - 12pm)', 'Tomorrow Afternoon (12pm - 3pm)', 'Tomorrow Evening (3pm - 6pm)'];

  const timeSlotDuration = (timeSlot) => {
    const now = new Date();
    const nextDay = new Date(now);
    nextDay.setDate(now.getDate() + 1); // Get the date for the next day

    let endTime;
    switch (timeSlot) {
      case 'Tomorrow Morning (9am - 12pm)':
        endTime = new Date(nextDay.setHours(12, 0, 0, 0)); // Next day at 12 PM
        break;
      case 'Tomorrow Afternoon (12pm - 3pm)':
        endTime = new Date(nextDay.setHours(15, 0, 0, 0)); // Next day at 3 PM
        break;
      case 'Tomorrow Evening (3pm - 6pm)':
        endTime = new Date(nextDay.setHours(18, 0, 0, 0)); // Next day at 6 PM
        break;
      default:
        return 0; // Default duration
    }

    const remainingSeconds = Math.floor((endTime - now) / 1000); // Convert milliseconds to seconds

    // NOTE:: change this variable to test the timer
    return remainingSeconds; // Return 10 seconds for testing purposes
  };


  const formatTime = (remainingTime) => {
    if (remainingTime > 3600) {
      const hours = Math.floor(remainingTime / 3600);
      const minutes = Math.ceil((remainingTime % 3600) / 60);
      return `${hours} hr ${minutes} min`;
    } else {
      const minutes = Math.ceil(remainingTime / 60);
      return `${minutes} min`;
    }
  };

  const handleTimerCompletion = () => {
    // setShowNotification(true);
    toast.success("The driver has arrived!", {
      position: 'top-right',
    });
  };




  return (
    <div>
      <h2>Select Pickup Time Slot</h2>
      <div className='schedule-picker-container'>
        <div className='time-slots-container'>
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
        <CountDownTimerComponent timerKey={`${timerKey}`} durationInSeconds={timeSlotDuration(selectedTimeSlot)} handleTimerCompletion={handleTimerCompletion} formatTime={formatTime} />
      </div>
      <ToastContainer autoClose={5000} hideProgressBar position="top-right" />
    </div >
  );
};
export default SchedulePicker;
