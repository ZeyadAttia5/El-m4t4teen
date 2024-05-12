import { useState } from 'react';

const DonorVolunteer = () => {
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [doctorInfo, setDoctorInfo] = useState({ clinicLocationLink: '', specialty: '', proBonoCases: '' });
  const [teacherInfo, setTeacherInfo] = useState({ subject: '', proBonoClasses: '' });
  const [isUploaded, setIsUploaded] = useState(false);

  const toggleRole = (role) => {
    if (selectedRoles.includes(role)) {
      setSelectedRoles(selectedRoles.filter(selectedRole => selectedRole !== role));
      // Reset doctorInfo when doctor role is deselected
      if (role === 'doctor') {
        setDoctorInfo({ clinicLocationLink: '', specialty: '', proBonoCases: '' });
      }
      // Reset teacherInfo when teacher role is deselected
      if (role === 'teacher') {
        setTeacherInfo({ subject: '', proBonoClasses: '' });
      }
    } else {
      setSelectedRoles([...selectedRoles, role]);
    }
  };

  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files[0]);
    setIsUploaded(true);
  };

  const handleConfirm = () => {
    // Handle confirmation logic here, for example, you can send selectedRoles and selectedFiles to the server
    console.log("Selected Roles:", selectedRoles);
    console.log("Selected Files:", selectedFiles);
    console.log("Doctor Info:", doctorInfo);
    console.log("Teacher Info:", teacherInfo);
    alert("done");
    // Reset the file upload
    setSelectedFiles(null);
    setIsUploaded(false);
  };

  const handleDoctorInfoChange = (e) => {
    const { name, value } = e.target;
    setDoctorInfo({ ...doctorInfo, [name]: value });
  };

  const handleTeacherInfoChange = (e) => {
    const { name, value } = e.target;
    setTeacherInfo({ ...teacherInfo, [name]: value });
  };

  return (
    <div>
      <h2>Volunteer Roles</h2>
      <ul>
        <li>
          <label>
            <input
              type="checkbox"
              checked={selectedRoles.includes('donor')}
              onChange={() => toggleRole('donor')}
            />
            Donor
          </label>
          {selectedRoles.includes('donor') && <button onClick={() => toggleRole('donor')}>Cancel</button>}
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              checked={selectedRoles.includes('teacher')}
              onChange={() => toggleRole('teacher')}
            />
            Teacher
          </label>
          {selectedRoles.includes('teacher') && <button onClick={() => toggleRole('teacher')}>Cancel</button>}
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              checked={selectedRoles.includes('doctor')}
              onChange={() => toggleRole('doctor')}
            />
            Doctor
          </label>
          {selectedRoles.includes('doctor') && <button onClick={() => toggleRole('doctor')}>Cancel</button>}
        </li>
      </ul>
      {selectedRoles.includes('teacher') && (
        <div>
          <h3>Teacher Information</h3>
          <div>
            <label htmlFor="subject">Subject(s):</label>
            <input type="text" id="subject" name="subject" value={teacherInfo.subject} onChange={handleTeacherInfoChange} />
          </div>
          <div>
            <label htmlFor="proBonoClasses">Amount of pro-bono classes/pro-bono students:</label>
            <input type="text" id="proBonoClasses" name="proBonoClasses" value={teacherInfo.proBonoClasses} onChange={handleTeacherInfoChange} />
          </div>
        </div>
      )}
      {selectedRoles.includes('doctor') && (
        <div>
          <h3>Doctor Information</h3>
          <div>
            <label htmlFor="clinicLocationLink">Attach Clinic Location link:</label>
            <input type="text" id="clinicLocationLink" name="clinicLocationLink" value={doctorInfo.clinicLocationLink} onChange={handleDoctorInfoChange} />
          </div>
          <div>
            <label htmlFor="specialty">Specialty:</label>
            <input type="text" id="specialty" name="specialty" value={doctorInfo.specialty} onChange={handleDoctorInfoChange} />
          </div>
          <div>
            <label htmlFor="proBonoCases">Amount of pro-bono cases:</label>
            <input type="text" id="proBonoCases" name="proBonoCases" value={doctorInfo.proBonoCases} onChange={handleDoctorInfoChange} />
          </div>
        </div>
      )}
      {isUploaded && (
        <button onClick={handleConfirm}>Upload</button>
      )}
      <div>
        <label htmlFor="file">Upload Relevant Documents:</label>
        <input type="file" id="file" onChange={handleFileChange} />
      </div>
    </div>
  );
};

export default DonorVolunteer;