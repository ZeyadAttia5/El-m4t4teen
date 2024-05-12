import React, { useState } from 'react';
import './TeacherForm.css';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const TeacherForm = () => {
  const subjects = ["Math", "English", "Computer"];
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [schedule, setSchedule] = useState(Array.from({ length: 7 }, () => Array(5).fill(true)));
  const [savedData, setSavedData] = useState(null);
  const [freeSlots, setFreeSlots] = useState(0);
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility

  const handleSubjectChange = (subject) => {
    const index = selectedSubjects.indexOf(subject);
    if (index === -1) {
      setSelectedSubjects([...selectedSubjects, subject]);
    } else {
      const updatedSubjects = [...selectedSubjects];
      updatedSubjects.splice(index, 1);
      setSelectedSubjects(updatedSubjects);
    }
  };

  const handleScheduleUpdate = (dayIndex, timeIndex) => {
    const updatedSchedule = [...schedule];
    updatedSchedule[dayIndex] = [...updatedSchedule[dayIndex]];
    updatedSchedule[dayIndex][timeIndex] = !updatedSchedule[dayIndex][timeIndex];
    setSchedule(updatedSchedule);
    updateFreeSlots(updatedSchedule);
  };

  const updateFreeSlots = (updatedSchedule) => {
    const totalSlots = updatedSchedule.reduce((acc, day) => acc + day.filter(slot => !slot).length, 0);
    setFreeSlots(totalSlots);
  };

  const saveData = () => {
    const data = {
      subjects: selectedSubjects,
      schedule: schedule.map((day, dayIndex) =>
        day.map((slot, timeIndex) => slot ? `Day ${dayIndex + 1}: Slot ${timeIndex + 1}` : null)
      )
    };

    const availableSlotsData = {
      subjects: data.subjects,
      schedule: data.schedule.map((day, dayIndex) =>
        day.map((slot, timeIndex) => slot ? slot : null)
      )
    };

    const filteredData = {
      subjects: availableSlotsData.subjects,
      schedule: availableSlotsData.schedule.map((day, dayIndex) =>
        day.filter(slot => slot !== null)
      )
    };

    setSavedData(filteredData);
    setShowModal(true); // Show modal after saving data
  };

  return (
    <div className="teacher-form-container">
      <h2 className="heading">
      <Link to="/teacher-dashboard" className="back-arroww" id = "LinkArrow"><FaArrowLeft /></Link> Teacher Form </h2>
      
      <div className="subject-selection">
        <label>Select Subjects:</label>
        {subjects.map((subject, index) => (
          <div key={index}>
            <input
              type="checkbox"
              id={subject}
              value={subject}
              checked={selectedSubjects.includes(subject)}
              onChange={() => handleSubjectChange(subject)}
            />
            <label htmlFor={subject}>{subject}</label>
          </div>
        ))}
      </div>
      <div className="schedule">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Slot 1</th>
              <th>Slot 2</th>
              <th>Slot 3</th>
              <th>Slot 4</th>
              <th>Slot 5</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((day, dayIndex) => (
              <tr key={dayIndex}>
                <td>Day {dayIndex + 1}</td>
                {day.map((slot, timeIndex) => (
                  <td key={timeIndex}>
                    <button onClick={() => handleScheduleUpdate(dayIndex, timeIndex)}>
                      {slot ? 'Unavailable' : 'Available'}
                    </button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <button onClick={saveData} id="saveButton">Save</button>
      </div>
      {showModal && savedData && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Saved Data:</h3>
            <p>Selected Subjects: {savedData.subjects.join(', ')}</p>
            <p>Schedule:</p>
            <ul>
              {savedData.schedule.map((day, dayIndex) => (
                <li key={dayIndex}>
                  <strong>Day {dayIndex + 1}:</strong> {day.filter(Boolean).join(', ')}
                </li>
                
              ))}
            </ul>
              
            <div className="info">
        <p>Number of Free Slots: {freeSlots}</p>
        <p>Number of Selected Subjects: {selectedSubjects.length}</p>
        <p>Number of Students: 30</p>
        </div>
       

            
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default TeacherForm;
