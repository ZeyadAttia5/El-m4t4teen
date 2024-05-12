import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './DonorsList.css'; // Assuming you have styles in DonorsList.css

function DonorsList() {
  const [donors, setDonors] = useState([
    {
      id: 1,
      name: 'John Doe',
      profession: 'Doctor',
      email: 'johndoe@example.com',
      selectedOrganization: null,
      isConfirmed: false,
    },
    {
      id: 2,
      name: 'Jane Doe',
      profession: 'Teacher',
      email: 'janedoe@example.com',
      selectedOrganization: null,
      isConfirmed: false,
    },
    // Add more donors as needed
  ]);

  return (
    <div className="donors-list-container">
      <h2 className="donors-list-heading">Donors List</h2>
      <table className="donors-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Profession</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {donors.map((donor, index) => (
            <tr key={donor.id}>
              <td>{donor.id}</td>
              <td>{donor.name}</td>
              <td>{donor.profession}</td>
              <td>{donor.email}</td>
              <td>
                <Link to={`/donor${donor.id}`} className="view-details-button">
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DonorsList;
