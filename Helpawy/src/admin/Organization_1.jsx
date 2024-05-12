import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Organization1.css'; // Import CSS file for styling

const Organization1 = () => {
  // Sample organization data
  const organization = {
    name: 'Organization A',
    email: 'orga@example.com',
    number: '01234646853',
    legalDocuments: '',
    requestDate: '2024-05-04',
  };

  const [status, setStatus] = useState(null);

  const handleAccept = () => {
    setStatus('Accepted');
  };

  const handleReject = () => {
    setStatus('Rejected');
  };

  const handleDownload = () => {
    const data = `Name: ${organization.name}\nEmail: ${organization.email}\nNumber: ${organization.number}\nSubmitted document ${organization.legalDocuments}\nRequest Date: ${organization.requestDate}`;
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
    // Generate a dummy PDF blob
    const dummyPdfBlob = new Blob(['Dummy PDF Content'], { type: 'application/pdf' });
    
    // Create a blob URL for the dummy PDF
    const url = window.URL.createObjectURL(dummyPdfBlob);
    
    // Create a temporary anchor element and trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'dummy_document.pdf'; // Set the desired file name here
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    // Release the blob URL
    window.URL.revokeObjectURL(url);
  };
  return (
    <div className="organization-details">
      <h2 className="heading">
      <Link to="/AOL" className="back-arroww"><FaArrowLeft /></Link>  Organization Details</h2>
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

export default Organization1;
