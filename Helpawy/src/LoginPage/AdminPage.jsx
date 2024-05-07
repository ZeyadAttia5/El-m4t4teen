// AdminPage.jsx
import OrganizationView from '../OrganizationView/OrganizationView.jsx';
import DonorView from '../DonorView/DonorView.jsx';
import AcceptReject from '../AcceptReject/AcceptReject.jsx';
import ViewRegButton from '../ViewRegOrg/ViewRegButton.jsx';

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