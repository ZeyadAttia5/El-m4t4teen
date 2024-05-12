import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React, { useState } from 'react';
// import SearchBox from 'react-google-maps/lib/places/SearchBox';
import './login.css';
// let map;
// let searchInput;

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [registrationMode, setRegistrationMode] = useState(false);
  const [DonorregistrationMode, setRegistrationDonorMode] = useState(false);
  const [registerClicked, setregisterClicked] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [specialization, setSpecialization] = useState('');
const [doctorDocument, setDoctorDocument] = useState(null);
const [clinicMarkerPosition, setClinicMarkerPosition] = useState(null);

const handleSpecializationChange = (e) => {
  setSpecialization(e.target.value);
};

const handleDoctorDocumentUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    setDoctorDocument(file.name);
  }
};

const handleClinicMapClick = (e) => {
  setClinicMarkerPosition({ lat: e.latLng.lat(), lng: e.latLng.lng() });
};

  const handleLogin = (e) => {
    e.preventDefault();

    // Check email and password for authentication
    if (email === 'admin@example.com' && password === 'admin123') {
      // Redirect to the admin dashboard if email and password are correct
      window.location.href = '/adminDashboard';
    } else if (email === 'donor@example.com' && password === 'donor123') {
      // Redirect to the user dashboard if email and password are correct
      window.location.href = '/HomePage';
    } else if(email === 'organiztion@example.com' && password === 'organiztion123'){
      // Display error message for incorrect credentials
      window.location.href = '/DL';
    }else{
      alert('Invalid email or password');
    }
  };

  const handleToggleRegistration = () => {
    setRegistrationMode(!registrationMode);
    setregisterClicked(true);
    setErrorMessage('');
    // Clear the form fields when toggling registration mode
    setEmail('');
    setPassword('');
  };

  const handleDonorToggleRegistration = () => {
    setRegistrationDonorMode(!DonorregistrationMode);
    setErrorMessage('');
    // Clear the form fields when toggling registration mode
    setEmail('');
    setPassword('');
  };


  const handleRegistration = (e) => {
    e.preventDefault();
  
    // Check if the phone number is not 11 digits long
    if (phoneNumber.length !== 11) {
      alert('Phone number must be 11 digits long.');
      return;
    }else if(uploadedFileName === null && !markerPosition){
      alert("Please upload your organization's document for verification and pin its location");
      return;
    }else if (!markerPosition) {
      alert("Please pin your organization's location ");
      return;
    } else if((uploadedFileName === null)){
      alert("Please upload your organization's document for verification.");
      return;
    }
  
    
  
    // Check if either the location is not pinned or no file is uploaded
    
  
    // Proceed with registration if all conditions are met
    alert('Registration successful! You can now log in.');
    window.location.href = '/';
    // Reset the form fields and mode after successful registration
    setEmail('');
    setPassword('');
    setPhoneNumber('');
    setUploadedFileName(null);
    setMarkerPosition(null);
    setRegistrationMode(false);
  };
  

  const handleDonorRegistration = (e) => {
    e.preventDefault();
    // Perform registration logic here
    // Example: send form data to server for registration
    
    alert('Registration successful! You can now log in.');
    window.location.href = '/';

  };
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFileName(file.name);
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (registrationMode) {
      // setregisterClicked(true);
      handleRegistration(e);
    } else if (DonorregistrationMode) {
      handleDonorRegistration(e);
    } else {
      handleLogin(e);
    }
  };
  const handleMapClick = (e) => {
    setMarkerPosition({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  };
  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const { latitude, longitude } = position.coords;
  //         setMarkerPosition({ lat: latitude, lng: longitude });
  //       },
  //       (error) => {
  //         console.error('Error getting current position:', error);
  //       }
  //     );
  //   } else {
  //     console.error('Geolocation is not supported by this browser.');
  //   }
  // }, []);

  return (
    <div className="login-page">
      <form onSubmit={registrationMode ? handleRegistration :DonorregistrationMode? handleDonorRegistration : handleLogin} className="login-form">
        <h2 className='h2'>{registrationMode || DonorregistrationMode ? 'Register' : 'Login'}</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {(registrationMode && !DonorregistrationMode) && (
          <>
            <input type="text" placeholder="First Name*" required />
            <input type="text" placeholder="Last Name*" required />
            <select className='organization-selectt' required>
              <option className = 'organization-selectt'value="">Select Gender*</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <input type="email" placeholder="Email*" required />
            <input type="password" placeholder="Password*" required />
            <input type="number" placeholder="Contact Number*" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
            <input type="text" placeholder="Organization Name*" required />
            <select className='organization-selectt' required>
              <option value="">Select Organization Type*</option>
              <option value="type1">school</option>
              <option value="type2">hospital</option>
              <option value="type3">church</option>
              <option value="type4">mosque</option>
              <option value="type5">non-profit</option>
            </select>
            <div className="upload-document">
            {(!uploadedFileName && registrationMode && registerClicked) && (
              <p className="upload-instruction" style={{ color: 'red' }}>Please upload a document for organization verification:</p>
            )}
            {(uploadedFileName && registrationMode && registerClicked) && (
              <p className="upload-instruction">Please upload a document for organization verification:</p>
            )}
              <label htmlFor="document-upload" className="upload-button">
                <span>{uploadedFileName || 'Choose File'}</span>
                <input type="file" id="document-upload" accept=".pdf,.doc,.docx" onChange={handleFileUpload}/>
              </label>
            </div>
            <input type="text" placeholder="Organization Address*" required />
            <input type="text" placeholder="Area*" required />
            <input type="text" placeholder="Governorate*" required />
            <div>
            {(!markerPosition && registrationMode && registerClicked) && (
              <p className="upload-instruction" style={{ color: 'red' }}>Please pin your organization's location:</p>
            )}
            {(markerPosition && registrationMode && registerClicked) && (
              <p className="upload-instruction">Please pin your organization's location:</p>
            )}
      <form onSubmit={handleFormSubmit} className="login-form">
     
        <LoadScript
          googleMapsApiKey="AIzaSyAdzaGmL_O_WXhUqyDe-EPm9qp6f2iHrek"
          libraries={['places']}
        >
          <GoogleMap
            mapContainerStyle={{ height: '250px', width: '100%' }}
            zoom={15}
            center={{ lat: 29.9861175, lng: 31.4394402 }}
            onClick={handleMapClick}
          >
            {markerPosition && <Marker position={markerPosition} />} 
          </GoogleMap>
        </LoadScript>
      </form>
    </div>


          </>
        )}
        {(!registrationMode && DonorregistrationMode) && (
  <>
    <input type="text" placeholder="First Name*" required />
    <input type="text" placeholder="Last Name*" required />
    <select className='organization-selectt' required>
      <option value="">Select Gender*</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
    <input type="email" placeholder="Email*" required />
    <input type="password" placeholder="Password*" required />
    <input type="number" placeholder="Contact Number*" required />
    <input type="text" placeholder="Address*" required />
    <input type="text" placeholder="Area*" required />
    <input type="text" placeholder="Governorate*" required />
    <select className='organization-selectt' onChange={handleSpecializationChange} required>
      <option value="">Specialization*</option>
      <option value="regular">Regular Donor</option>
      <option value="teacher">Teacher</option>
      <option value="doctor">Doctor</option>
    </select>
    {specialization === "doctor" && (
      <>
        <div className="upload-document">
          <label htmlFor="document-upload" className="upload-button">
            <span>{doctorDocument || 'Upload Doctor Document'}</span>
            <input type="file" id="document-upload" accept=".pdf,.doc,.docx" onChange={handleDoctorDocumentUpload}/>
          </label>
        </div>
        <input type="text" placeholder="Clinic Location*" required />
        <input type="text" placeholder="Clinic Area*" required />
        <input type="text" placeholder="Clinic Governorate*" required />
        <LoadScript
          googleMapsApiKey="AIzaSyAdzaGmL_O_WXhUqyDe-EPm9qp6f2iHrek"
          libraries={['places']}
        >
          <GoogleMap
            mapContainerStyle={{ height: '250px', width: '100%' }}
            zoom={15}
            center={{ lat: 29.9861175, lng: 31.4394402 }}
            onClick={handleClinicMapClick}
          >
            {clinicMarkerPosition && <Marker position={clinicMarkerPosition} />} 
          </GoogleMap>
        </LoadScript>
        <input type="text" placeholder="Specialty*" required />
        <input type="number" placeholder="Pro-bono Cases*" required />
      </>
    )}
    {specialization === "teacher" && (
      <>
        <input type="text" placeholder="Subjects Taught*" required />
        <input type="number" placeholder="Pro-bono Classes*" required />
      </>
    )}
  </>
)}

        {!registrationMode && !DonorregistrationMode && (
          <>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </>
        )}
        <button type="submit">{registrationMode || DonorregistrationMode ? <strong>Register</strong> : <strong>Login</strong>}</button>
        <div className='button-group'>
          {(!DonorregistrationMode)&&(<>
            <button className="button2" onClick={handleToggleRegistration}>
            {registrationMode|| DonorregistrationMode ? 'Not registering organization? ' : 'Register new '}
            {!registrationMode && !DonorregistrationMode && <strong>Organization</strong>}
            {registrationMode && <strong>Login</strong>}
          </button>
          </>)}
          {(!registrationMode)&&(<>
            <button className="button2" onClick={handleDonorToggleRegistration}>
            {registrationMode || DonorregistrationMode ? 'Not registering donor? ' : 'Register new '}
            {!registrationMode && !DonorregistrationMode && <strong>Donor</strong>}
            {DonorregistrationMode && <strong>Login</strong>}
          </button>
          </>)}
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
