// import { useState } from 'react';
// // import './OrganizationView.css';

// const RequestView = () => {
//   const [items, setItems] = useState([
//     { name: "T-Shirt", type: "Clothing" },
//     { name: "Pants", type: "Clothing" },
//     { name: "Shoes", type: "Clothing" },
//     { name: "Pencil", type: "Stationery" },
//     { name: "Calculator", type: "Stationery" },
//     { name: "Lego bricks", type: "Toys" }
//   ]);
//   const [showItems, setShowItems] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filter, setFilter] = useState('');

//   const toggleItems = () => {
//     setShowItems(!showItems);
//   };

//   // State to track which item's information is being downloaded
//   const [downloadedItem, setDownloadedItem] = useState(null);

//   // Function to handle download button click
//   const handleDownload = (item) => {
//     setDownloadedItem(item.name);
//     setItems(items.filter(i => i !== item)); // Remove the item from the list
//   };

//   // Filter the items based on the search query and filter criteria
//   const filteredItems = items.filter(item => {
//     return item.name.toLowerCase().includes(searchQuery.toLowerCase()) && (filter === '' || item.type.toLowerCase().startsWith(filter.toLowerCase()));
//   });

//   return (
//     <>
//     <div>
//       <div>
//       <button onClick={toggleItems}>Show Requests</button>
//       </div>
//       {showItems && (
//         <div>
//           <h2>Current Requests</h2>
//           <input
//             type="text"
//             placeholder="Search items"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <select
//             value={filter}
//             onChange={(e) => setFilter(e.target.value)}
//           >
//             <option value="">All</option>
//             <option value="C">Clothing</option>
//             <option value="S">Stationery</option>
//             <option value="T">Toys</option>
//           </select>
//           <ul>
//             {filteredItems.map((item, index) => (
//               <li key={index}>
//                 {item.name}
//                 <button onClick={() => handleDownload(item)}>Confirm Request</button> 
//                 {downloadedItem === item.name && <span>Done</span>} {/* Print 'Done' if this item was downloaded */}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//     </>
//   );
// };

// export default RequestView;



// import { TextField, MenuItem, Button } from '@mui/material';
// import { useState } from 'react';

// const RequestView = () => {

//     const [selectedRoles, setSelectedRoles] = useState([]);
//     const [teacherInfo, setTeacherInfo] = useState({ subject: '', proBonoClasses: '' });
//     const [doctorInfo, setDoctorInfo] = useState({ clinicLocationLink: '', specialty: '', proBonoCases: '' });
//     const [isUploaded, setIsUploaded] = useState(false);

//     const toggleRole = (role) => {
//         setSelectedRoles((prevRoles) =>
//             prevRoles.includes(role) ? prevRoles.filter((r) => r !== role) : [...prevRoles, role]
//         );
//     };

//     const handleTeacherInfoChange = (e) => {
//         const { name, value } = e.target;
//         setTeacherInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
//     };

//     const handleDoctorInfoChange = (e) => {
//         const { name, value } = e.target;
//         setDoctorInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
//     };

//     const handleConfirm = () => {
//         // Implement upload functionality
//         setIsUploaded(true);
//     };

//     const handleFileChange = (e) => {
//         // Handle file change
//     };

//     return (
//         <div>
//             <h2>Volunteer Roles</h2>
//             <form>
//                 <ul>
//                     <li>
//                         <label>
//                             <input
//                                 type="checkbox"
//                                 checked={selectedRoles.includes('donor')}
//                                 onChange={() => toggleRole('donor')}
//                             />
//                             Donor
//                         </label>
//                         {selectedRoles.includes('donor') && <button onClick={() => toggleRole('donor')}>Cancel</button>}
//                     </li>
//                     <li>
//                         <label>
//                             <input
//                                 type="checkbox"
//                                 checked={selectedRoles.includes('teacher')}
//                                 onChange={() => toggleRole('teacher')}
//                             />
//                             Teacher
//                         </label>
//                         {selectedRoles.includes('teacher') && <button onClick={() => toggleRole('teacher')}>Cancel</button>}
//                     </li>
//                     <li>
//                         <label>
//                             <input
//                                 type="checkbox"
//                                 checked={selectedRoles.includes('doctor')}
//                                 onChange={() => toggleRole('doctor')}
//                             />
//                             Doctor
//                         </label>
//                         {selectedRoles.includes('doctor') && <button onClick={() => toggleRole('doctor')}>Cancel</button>}
//                     </li>
//                 </ul>
//                 {selectedRoles.includes('teacher') && (
//                     <div>
//                         <h3>Teacher Information</h3>
//                         <div>
//                             <label htmlFor="subject">Subject(s):</label>
//                             <input type="text" id="subject" name="subject" value={teacherInfo.subject} onChange={handleTeacherInfoChange} />
//                         </div>
//                         <div>
//                             <label htmlFor="proBonoClasses">Amount of pro-bono classes/pro-bono students:</label>
//                             <input type="text" id="proBonoClasses" name="proBonoClasses" value={teacherInfo.proBonoClasses} onChange={handleTeacherInfoChange} />
//                         </div>
//                     </div>
//                 )}
//                 {selectedRoles.includes('doctor') && (
//                     <div>
//                         <h3>Doctor Information</h3>
//                         <div>
//                             <label htmlFor="clinicLocationLink">Attach Clinic Location link:</label>
//                             <input type="text" id="clinicLocationLink" name="clinicLocationLink" value={doctorInfo.clinicLocationLink} onChange={handleDoctorInfoChange} />
//                         </div>
//                         <div>
//                             <label htmlFor="specialty">Specialty:</label>
//                             <input type="text" id="specialty" name="specialty" value={doctorInfo.specialty} onChange={handleDoctorInfoChange} />
//                         </div>
//                         <div>
//                             <label htmlFor="proBonoCases">Amount of pro-bono cases:</label>
//                             <input type="text" id="proBonoCases" name="proBonoCases" value={doctorInfo.proBonoCases} onChange={handleDoctorInfoChange} />
//                         </div>
//                     </div>
//                 )}
//                 {isUploaded && (
//                     <button onClick={handleConfirm}>Upload</button>
//                 )}
//                 <div>
//                     <label htmlFor="file">Upload Relevant Documents:</label>
//                     <input type="file" id="file" onChange={handleFileChange} />
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default RequestView;
