import { useState } from 'react';
import 'C:/Users/Seif/Documents/GitHub/El-m4t4teen/Helpawy/src/DonorPage/OrganizationView.css'

const OrganizationView = () => {
  const organizations = ["Organization 1", "Organization 2", "Organization 3"];

  // State to track which organization's information is being downloaded
  const [downloadedOrganization, setDownloadedOrganization] = useState(null);

  // Function to handle download button click
  const handleDownload = (organization) => {
    setDownloadedOrganization(organization);
  };

  return (
    <div>
      <h2>Organizations</h2>
      <ul>
        {organizations.map((organization, index) => (
          <li key={index}>
            {organization}
            <button onClick={() => handleDownload(organization)}>Download information</button> 
            {downloadedOrganization === organization && <span>Done</span>} {/* Print 'Done' if this organization was downloaded */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrganizationView;
