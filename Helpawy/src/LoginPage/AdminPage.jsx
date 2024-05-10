// AdminPage.jsx
<<<<<<< Updated upstream
import OrganizationView from '../OrganizationView/OrganizationView.jsx';
import DonorView from '../DonorView/DonorView.jsx';
import AcceptReject from '../AcceptReject/AcceptReject.jsx';
import ViewRegButton from '../ViewRegOrg/ViewRegButton.jsx';
=======

import React from 'react';

import DonorView from 'C:/Users/Seif/Documents/GitHub/El-m4t4teen/Helpawy/src/DonorView/DonorView.jsx';
import AcceptReject from 'C:/Users/Seif/Documents/GitHub/El-m4t4teen/Helpawy/src/AcceptReject/AcceptReject.jsx';
import ViewRegButton from 'C:/Users/Seif/Documents/GitHub/El-m4t4teen/Helpawy/src/ViewRegOrg/ViewRegButton.jsx';
>>>>>>> Stashed changes

const AdminPage = () => {
  return (
    <div>
      <h2>Admin Options</h2>
      <DonorView/>  
      <AcceptReject/> 
      <ViewRegButton/>
      </div>
  );
};
export default AdminPage;