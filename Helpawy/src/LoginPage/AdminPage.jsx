// AdminPage.jsx
import OrganizationView from '../OrganizationView/OrganizationView';
import DonorView from '../DonorView/DonorView';
import AcceptReject from '../AcceptReject/AcceptReject';
import ViewRegButton from '../ViewRegOrg/ViewRegButton';

const AdminPage = () => {
  return (
    <div>
      <h2>Admin Options</h2>
      <OrganizationView /> 
      <DonorView/>  
      <AcceptReject/> 
      <ViewRegButton/>
      </div>
  );
};
export default AdminPage;