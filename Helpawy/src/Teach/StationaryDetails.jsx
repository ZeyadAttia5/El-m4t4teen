import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './TeacherDetails.css';

const teachers = [
  { id: 1, name: 'Physics Book', type: 'Book', amount: 3 },
  { id: 2, name: 'Math Book', type: 'Book', amount: 5 },
  { id: 3, name: 'Rulers', type: 'Book', amount: 10 },
  { id: 4, name: '3 Subject Notebooks', type: 'Stationary', amount: 7 },
  { id: 5, name: '5 Subject Notebook', type: 'Stationary', amount: 7 },
  { id: 6, name: 'Blue Pens', type: 'Stationary ', amount: 12 },
  { id: 7, name: 'Black Pens', type: 'Stationary', amount: 17 },
  { id: 8, name: 'Pencils', type: 'Stationary', amount: 12 },
  { id: 9, name: 'Erasers', type: 'Stationary', amount: 25 },
];

const StationaryDetails = () => {
  const { id } = useParams();
  const [teacher, setTeacher] = useState(teachers.find(teacher => teacher.id === parseInt(id)));
  const [processing, setProcessing] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedQuantity, setSelectedQuantity] = useState(null);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  }

  const handleAcceptClick = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setAccepted(true);
      const updatedAmount = teacher.amount - quantity;
      const updatedTeachers = teachers.map(t => {
        if (t.id === teacher.id) {
          return {
            ...t,
            amount: updatedAmount >= 0 ? updatedAmount : 0
          };
        }
        return t;
      });
      setTeacher(updatedTeachers.find(t => t.id === teacher.id));
      setSelectedQuantity(quantity);
    }, 1500);
  };

  return (
    <div className="teacher-details-container">
      <h2>{teacher.name}</h2>
      <p><strong>Type:</strong> {teacher.type}</p>
      <p><strong>Amount Required:</strong> {teacher.amount}</p>
      <label htmlFor="quantity">Quantity:</label>
      <input type="number" id="quantity" min="0" max={teacher.amount} value={quantity} onChange={handleQuantityChange} />
      <button onClick={handleAcceptClick} id='button2' disabled={processing || accepted}>
        {processing ? 'Processing...' : accepted ? 'Donated' : 'Donate'}
      </button>
      {selectedQuantity !== null && <p className="selected-quantity">Quantity Chosen to Donate: {selectedQuantity}</p>}
    </div>
  );
}

export default StationaryDetails;
