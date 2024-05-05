import React from 'react';
import './OrganizationView.css'

const OrganizationView = () => {
  const organizations = ["Organization 1", "Organization 2", "Organization 3"];

  return (
    <div>
      <h2>Organizations</h2>
      <ul>
        {organizations.map((organization, index) => (
          <li key={index}>{organization}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrganizationView;
