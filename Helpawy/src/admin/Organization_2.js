import React, { useState } from 'react';
import './Organization1.css'; // Import CSS file for styling

const Organization2 = () => {
  // Sample organization data
  const organization = {
    name: 'Organization B',
    email: 'orgb@example.com',
    number: '01507954562',
    legalDocuments: 'Legal Documents 2',
    requestDate: '2024-05-05',
  };

  const [status, setStatus] = useState(null);

  const handleAccept = () => {
    setStatus('Accepted');
  };

  const handleReject = () => {
    setStatus('Rejected');
  };

  const handleDownload = () => {
    const data = `Name: ${organization.name}\nEmail: ${organization.email}\nNumber: ${organization.number}\nSubmitted document: ${organization.legalDocuments}\nRequest Date: ${organization.requestDate}`;
    const blob = new Blob([data], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'organization_details.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  const handleDownloadSubmittedDocument = () => {
    // Assuming organization.legalDocuments holds the URL of the uploaded file
    const downloadUrl = organization.legalDocuments;
    
    if (downloadUrl) {
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = 'submitted_document.pdf'; // Set the desired file name here
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      // Handle the case where the document hasn't been uploaded yet
      alert('Document has not been uploaded yet.');
    }
  };

  return (
    <div className="organization-details">
      <h2 className="heading">Organization Details</h2>
      <div className="info">
        <div className="info-item">
          <span className="label">Name:</span> {organization.name}
        </div>
        <div className="info-item">
          <span className="label">Email:</span> {organization.email}
        </div>
        <div className="info-item">
          <span className="label">Number:</span> {organization.number}
        </div>
        <div className="info-item">
        <span className="label">Submitted document:</span> {organization.legalDocuments}
          {(
            <button className="download2-button" onClick={handleDownloadSubmittedDocument}>
              Download Submitted Document
            </button>
          )}
        </div>
        <div className="info-item">
          <span className="label">Request Date:</span> {organization.requestDate}
        </div>
      </div>
      {!status && (
        <div className="button-group">
          <button className="accept-button" onClick={handleAccept}>Accept</button>
          <button className="reject-button" onClick={handleReject}>Reject</button>
        </div>
      )}
      <button className="download-button" onClick={handleDownload}>Download Details</button>
      {status && <div className={`status ${status.toLowerCase()}`}>{status}</div>}
    </div>
  );
};

export default Organization2;
