import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './OrganizationsList.css'; // Import styles for OrganizationsList

function OrganizationsList() {
  const [organizations, setOrganizations] = useState([
    {
      id: 1,
      name: 'Organization A',
      email: 'orga@example.com',
      number: '010564646531',
      address: 'Zayed, Giza',
    },
    {
      id: 2,
      name: 'Organization B',
      email: 'orgb@example.com',
      number: '012964654',
      address: 'Zamalek, Giza',
    },
    {
      id: 3,
      name: 'Organization C',
      email: 'orgc@example.com',
      number: '01054684531',
      address: 'Mohandesen, Giza',
    },
  ]);

  return (
    <div className="organizations-list-container">
      <h2 className="organizations-list-heading">Organizations List</h2>
      <table className="organizations-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {organizations.map((org) => (
            <tr key={org.id}>
              <td>{org.id}</td>
              <td>{org.name}</td>
              <td>{org.email}</td>
              <td>{org.number}</td>
              <td>{org.address}</td>
              <td>
                <Link to={`/organization${org.id}`} className="view-details-button">
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

export default OrganizationsList;
