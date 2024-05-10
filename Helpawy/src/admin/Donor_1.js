import React, { useState } from 'react';
import './Organization1.css'; // Import CSS file for styling

const Organization1 = () => {
  // Sample organization data
  const organization = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    number: '061231655516',
    legalDocuments: 'Doctor', //profession
    requestDate: '2024-05-04',
  };

  const [status, setStatus] = useState(null);
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    setStatus('Accepted');
  };

  const handleReject = () => {
    setStatus('Rejected');
  };

  const handleDownload = () => {
    const data = `Name: ${organization.name}\nEmail: ${organization.email}\nNumber: ${organization.number}\nProfession: ${organization.legalDocuments}\nRequest Date: ${organization.requestDate}`;
    const blob = new Blob([data], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'donor_details.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="organization-details">
      <h2 className="heading">Donor Details</h2>
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
          <span className="label">Profession:</span> {organization.legalDocuments}
        </div>
        <div className="info-item">
          <span className="label">Request Date:</span> {organization.requestDate}
        </div>
      </div>
      {status && <div className={`status ${status.toLowerCase()}`}>{status}</div>}
      {!status && !accepted && (
        <div className="button-group">
          <button className="accept-button" onClick={handleAccept}>Accept</button>
          <button className="reject-button" onClick={handleReject}>Reject</button>
        </div>
      )}
      <button className="download-button" onClick={handleDownload}>Download Details</button>
    </div>
  );
};

export default Organization1;
