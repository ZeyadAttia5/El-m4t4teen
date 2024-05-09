import './PostCards.css';
import { useState } from 'react';
import ecgMachine from '../assets/ecg_machine.jpg';
import ventilator from '../assets/ventilator.jpg';
import diazepam from '../assets/diazepam.jpg';
import actonel from "../assets/actonel.jpg";
import Popup from '../Popup/Popup';
// import PostCard from '../PostCard/PostCard';
import Post from '../PostCard/postUserPrespective';

const posts = [
  // Sample data for medical supplies donation requests
  {
    id: 1,
    type: 'Medical Device',
    title: 'ECG Machine',
    quantity_requested: 3,
    quantity_fulfilled: 1,
    description: 'Portable ECG Machine with 12-lead monitoring capability.',
    image: ecgMachine,
    fulfilled: false,
  },
  {
    id: 2,
    type: 'Medical Equipment',
    title: 'Ventilator',
    quantity_requested: 2,
    quantity_fulfilled: 1,
    description: 'Advanced ICU ventilator with built-in oxygen concentrator.',
    image: ventilator,
    fulfilled: false,
  },

  {
    id: 3,
    type: 'Medication',
    title: 'Diazepam',
    quantity_requested: 5,
    quantity_fulfilled: 3,
    description: 'Used to treat anxiety, seizures, alcohol withdrawal syndrome, and muscle spasms.',
    image: diazepam,
    fulfilled: true,
  },

  {
    id: 4,
    type: 'Medication',
    title: 'Actonel',
    quantity_requested: 9,
    quantity_fulfilled: 3,
    description: 'Used in the prevention and treatment of osteoporosis.',
    image: actonel,
    fulfilled: true,
  },
  // Add more sample data as needed
];

function PostCards() {
  const [filterType, setFilterType] = useState('All'); // Initial filter type
  const [selectedRequest, setSelectedRequest] = useState(null); // For viewing details
  const [showPopup, setShowPopup] = useState(false); // For showing/hiding the popup

  // Function to handle filter option change
  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  //  Function to handle click on "View Details" button
  // const handleViewDetails = (request) => {
  //   setSelectedRequest(request);
  //   setShowPopup(true);
  // };

  // Function to close the view details component
  const handleCloseDetails = () => {
    setSelectedRequest(null);
    setShowPopup(false);
  };

  // Function to handle donation
  const handleDonate = () => {
    // Handle donation logic here
    handleCloseDetails();
  };

  return (
    <div className="medical-supplies-component">
      <h1>Medical Supplies Donation Requests</h1>

      {/* Filter options */}
      <div className="filter-options">
        <select value={filterType} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="Fulfilled">Fulfilled</option>
          <option value="Not Fulfilled">Not Fulfilled</option>
        </select>
      </div>

      {/* Display filtered medical supplies donation requests */}
      <div className="medical-supplies-list">
        {posts
          .filter((item) => filterType === 'All' || item.fulfilled === filterType)
          .map((request) => (
            <div key={request.id} className="medical-supplies-item">
              <Post post={request} />
            </div>
          ))}
      </div>

      {/* Popup */}
      {showPopup && (
        <Popup
          selectedRequest={selectedRequest}
          onClose={handleCloseDetails}
          onDonate={handleDonate}
        />
      )}
    </div>
  );
}

export default PostCards;
