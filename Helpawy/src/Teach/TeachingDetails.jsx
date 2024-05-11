import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import './TeacherDetails.css';

const teachers = [
  { id: 1, name: 'Math Teacher', subject: 'Math', teachingAreas: 'Madinaty', governorate: 'Cairo', numberOfStudents: 30, address: 'B12', coordinates: { lat: 30.08498749136197, lng: 31.65796306721924 } },
  { id: 2, name: 'English Teacher', subject: 'English', teachingAreas: 'Sheikh Zayed', governorate: 'Giza', numberOfStudents: 25, address: 'Palm Hills', coordinates: { lat: 30.017, lng: 31.213 } },
  { id: 3, name: 'Physics Teacher', subject: 'Physics', teachingAreas: 'Sidi Bishr', governorate: 'Alexandria', numberOfStudents: 40, address: 'Mohamad Nageeb St.', coordinates: { lat: 31.2001, lng: 29.9187 } },
];

const TeacherDetails = () => {
  const { id } = useParams();
  const teacher = teachers.find(teacher => teacher.id === parseInt(id));
  const [processing, setProcessing] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const handleAcceptClick = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setAccepted(true);
    }, 3000);
  };

  const mapStyles = {
    height: "400px",
    width: "100%"
  };

  return (
    <div className="teacher-details-container">
      <h2>{teacher.name}</h2>
      <p><strong>Subject:</strong> {teacher.subject}</p>
      <p><strong>Teaching Areas:</strong> {teacher.teachingAreas}</p>
      <p><strong>Governorate:</strong> {teacher.governorate}</p>
      <p><strong>Number of Students:</strong> {teacher.numberOfStudents}</p>
      <p><strong>Address:</strong> {teacher.address}</p>

      

      <LoadScript googleMapsApiKey="YOUR_API_KEY">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={14}
          center={teacher.coordinates}
        >
          <Marker position={teacher.coordinates} />
        </GoogleMap>
      </LoadScript>

      <button onClick={handleAcceptClick} id = 'button2' disabled={processing || accepted}>
        {processing ? 'Processing...' : accepted ? 'Accepted' : 'Accept'}
      </button>
      
    </div>
  );
}

export default TeacherDetails;
