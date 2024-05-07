import { useState } from 'react';

const organizations = [
  { id: 1, name: 'Hospital 1', area: '5th Settlement', governorate: 'Cairo', type: 'Hospital' },
  { id: 2, name: 'School 1', area: 'Al Manshiyya', governorate: 'Alexandria', type: 'School' },
  { id: 3, name: 'Kindergarten', area: 'Heliopolis', governorate: 'Cairo', type: 'Education' },
  { id: 4, name: 'Orphanage', area: 'Shbeen el kom', governorate: 'Monufia', type: 'Social Welfare' },
  { id: 5, name: 'School 2', area: 'Sidi Bishr', governorate: 'Alexandria', type: 'School' },
  { id: 6, name: 'Hospital 2', area: 'Nasr City', governorate: 'Cairo', type: 'Hospital' },
];

const ViewRegOrg = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedGovernorate, setSelectedGovernorate] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [orgList, setOrgList] = useState(organizations);

  const areas = [...new Set(organizations.map(org => org.area))];
  const governorates = [...new Set(organizations.map(org => org.governorate))];
  const types = [...new Set(organizations.map(org => org.type))];

  const filteredOrganizations = orgList.filter(org =>
    org.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedArea === '' || org.area === selectedArea) &&
    (selectedGovernorate === '' || org.governorate === selectedGovernorate) &&
    (selectedType === '' || org.type === selectedType)
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAreaChange = (e) => {
    setSelectedArea(e.target.value);
  };

  const handleGovernorateChange = (e) => {
    setSelectedGovernorate(e.target.value);
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const showDetails = (org) => {
    alert(`Area: ${org.area}, Governorate: ${org.governorate}, Type: ${org.type}`);
  };

  const deleteOrganization = (id) => {
    setOrgList(orgList.filter(org => org.id !== id));
  };

  const downloadPlaceholder = () => {
    const placeholderContent = "Placeholder file content";
    const blob = new Blob([placeholderContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'placeholder.txt';
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search organizations"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select value={selectedArea} onChange={handleAreaChange}>
        <option value="">Filter by Area</option>
        {areas.map((area, index) => (
          <option key={index} value={area}>{area}</option>
        ))}
      </select>
      <select value={selectedGovernorate} onChange={handleGovernorateChange}>
        <option value="">Filter by Governorate</option>
        {governorates.map((governorate, index) => (
          <option key={index} value={governorate}>{governorate}</option>
        ))}
      </select>
      <select value={selectedType} onChange={handleTypeChange}>
        <option value="">Filter by Organization Type</option>
        {types.map((type, index) => (
          <option key={index} value={type}>{type}</option>
        ))}
      </select>
      <ul>
        {filteredOrganizations.map(org => (
          <li key={org.id}>
            {org.name}
            <button onClick={() => showDetails(org)}>Details</button>
            <button onClick={() => deleteOrganization(org.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={downloadPlaceholder}>Download Placeholder</button>
    </div>
  );
};

export default ViewRegOrg;
