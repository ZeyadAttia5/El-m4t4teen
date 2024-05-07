import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import './ChooseItemTypePage.css'; // Import your CSS file

const MyForm = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    category: '',
  });

  // Handler for form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log('Form data:', formData);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <TextField
        name="firstName"
        label="First Name"
        value={formData.firstName}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        className="form-field"
      />
      <TextField
        name="lastName"
        label="Last Name"
        value={formData.lastName}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        className="form-field"
      />
      <TextField
        name="email"
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        className="form-field"
      />
      <FormControl fullWidth margin="normal" className="form-field">
        {/* <InputLabel id="category-label">Category</InputLabel> */}

        <InputLabel
          id="category-label"
          type="category"
          fullWidth
          margin="normal"
          className="form-field"
        > Category</InputLabel>
        <Select
          labelId="category-label"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
        >
          <MenuItem value="health">Health Sector Donations</MenuItem>
          <MenuItem value="school">School Supplies Donations</MenuItem>
          <MenuItem value="refugee">Refugee and Poverty Line Needs</MenuItem>
          <MenuItem value="orphanage">Orphanage Donations</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary" className="submit-button">
        Submit
      </Button>
    </form>
  );
};

export default MyForm;
