// AdminPage.jsx

import React from 'react';
import OrganizationView from '../OrganizationView/OrganizationView';
import DonorView from '../DonorView/DonorView';

const AdminPage = () => {
  return (
    <div>
      <h2>Welcome to the Admin Page</h2>
      <OrganizationView /> 
      <DonorView/>   
      </div>
  );
};
export default AdminPage;