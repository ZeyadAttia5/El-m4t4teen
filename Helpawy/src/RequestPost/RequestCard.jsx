import { useState } from 'react';
import { TextField, Select, MenuItem, Input, } from '@mui/material';
import './RequestCard.css'; // Import your custom CSS file

const RequestCard = () => {
  const [selectedCategory, setSelectedCategory] = useState('Select a Category');
  const [requestPosted, setRequestPosted] = useState(false);
  const [additionalFields, setAdditionalFields] = useState({
    season: 'default', // Set default value for season
    gender: 'default', // Set default value for gender
    type: 'default', // Set default value for type
    color: 'default', // Set default value for color
    age: 'default', // Set default value for age
    material: 'default', // Set default value for material
  });

  const categories = [
    'Select a Category',
    'Clothes',
    'Toys',
    'Food',
    'Medical Supplies',
    'School Supplies',
    'Blood Donations'
  ];

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setAdditionalFields({}); // Reset additionalFields when category changes
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdditionalFields((prevFields) => ({
      ...prevFields,
      [name]: value
    }));
  };

  const handlePostRequest = () => {
    // Add functionality to handle posting the request here
    console.log("Request posted!");
    setRequestPosted(true);
  };

  const renderAdditionalFields = () => {
    switch (selectedCategory) {
      case 'Clothes':
        return (
          <>
            {/* Dropdown menu for type */}
            <Select
              className='additional-input'
              name='type'
              value={additionalFields.type || 'default'} // Set default value here
              onChange={handleInputChange}
              label="type"
            >
              <MenuItem value="default">Select the Type of Clothing</MenuItem>
              <MenuItem value="shirt">Shirt</MenuItem>
              <MenuItem value="pants">Pants</MenuItem>
              <MenuItem value="hoodie">Hoodie</MenuItem>
              <MenuItem value="shoes">Shoes</MenuItem>
              <MenuItem value="socks">Socks</MenuItem>
            </Select>

            {/* Dropdown menu for age */}
            <Select
              className='additional-input'
              name='age'
              value={additionalFields.age || 'default'} // Set default value here
              onChange={handleInputChange}
              label="age"
            >
              <MenuItem value="default">Select the Age of Clothing</MenuItem>
              <MenuItem value="kids">Kids</MenuItem>
              <MenuItem value="adults">Adults</MenuItem>
            </Select>

            {/* Dropdown menu for gender */}
            <Select
              name='gender'
              className='additional-input'
              value={additionalFields.gender || 'default'} // Set default value here
              onChange={handleInputChange}
              label="gender"
            >
              <MenuItem value="default">Select Gender</MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>

            {/* Dropdown menu for color */}
            <Select
              name='color'
              className='additional-input'
              value={additionalFields.color || 'default'} // Set default value here
              onChange={handleInputChange}
              label="color"
            >
              <MenuItem value="default">Select the Color</MenuItem>
              <MenuItem value="red">Red</MenuItem>
              <MenuItem value="khaki">Khaki</MenuItem>
              <MenuItem value="black">Black</MenuItem>
              <MenuItem value="cyan">Cyan</MenuItem>
            </Select>

            {/* Dropdown menu for season */}
            <Select
              name='season'
              className='additional-input'
              value={additionalFields.season || 'default'} // Set default value here
              onChange={handleInputChange}
              label="season"
            >
              <MenuItem value="default">Season</MenuItem>
              <MenuItem value="winter">Winter</MenuItem>
              <MenuItem value="summer">Summer</MenuItem>
            </Select>

            {/* Dropdown menu for material */}

            <Select
              className='additional-input'
              id="material"
              value={additionalFields.material || 'default'}
              onChange={handleInputChange}
              label="material"
            >
              <MenuItem value="default">Select the Material</MenuItem>
              <MenuItem value="cotton">Cotton</MenuItem>
              <MenuItem value="polyester">Polyester</MenuItem>
              <MenuItem value="silk">Silk</MenuItem>
            </Select>
            {/* Add more additional fields here */}

            {/* Input for quantity */}
            <TextField
              name='quantity'
              placeholder='e.g. 1'
              type='number'
              className='additional-input'
              value={additionalFields.quantity || ''} // Set default value here
              onChange={handleInputChange}
              label="Quantity"
            />
          </>
        );
      case 'Toys':
        return (
          <>
            <Select
              name="type"
              label="Type"
              value={additionalFields.type || 'default'}
              onChange={handleInputChange}
            >
              <MenuItem value="default">Select the Type</MenuItem>
              <MenuItem value="educational">Educational</MenuItem>
              <MenuItem value="plush">Plush</MenuItem>
              <MenuItem value="electronic">Electronic</MenuItem>
            </Select>

            {/* Dropdown menu for type */}
            <Select
              className='additional-input'
              name='category'
              value={additionalFields.category || 'default'} // Set default value here
              onChange={handleInputChange}
              label="category"
            >
              <MenuItem value="default">Select the Category</MenuItem>
              <MenuItem value="board-games">Board Games</MenuItem>
              <MenuItem value="stuffed-toys">Stuffed Toys</MenuItem>
              <MenuItem value="dolls"> Dolls</MenuItem>
              <MenuItem value="sports">Sports</MenuItem>
              <MenuItem value="shoes">Cars</MenuItem>
              <MenuItem value="socks">Outdoor</MenuItem>
            </Select>

            {/* Dropdown menu for age group*/}
            <Select
              className='additional-input'
              name='ageGroup'
              value={additionalFields.ageGroup || 'default'} // Set default value here
              onChange={handleInputChange}
              label="age-group"
            >
              <MenuItem value="default">Select the Age Group</MenuItem>
              <MenuItem value="toddlers">0-3</MenuItem>
              <MenuItem value="preschooler">3-6</MenuItem>
              <MenuItem value="child">6-9</MenuItem>
              <MenuItem value="preteen">9-12</MenuItem>
              <MenuItem value="teens">12+</MenuItem>
            </Select>

            {/* Dropdown menu for gender */}
            <Select
              name='gender'
              className='additional-input'
              value={additionalFields.gender || 'default'} // Set default value here
              onChange={handleInputChange}
              label="gender"
            >
              <MenuItem value="default">Select Gender</MenuItem>
              <MenuItem value="boy">Boy</MenuItem>
              <MenuItem value="girl">Girl</MenuItem>
            </Select>

            {/* Input for quantity */}
            <TextField
              name='quantity'
              placeholder='e.g. 1'
              type='number'
              className='additional-input'
              value={additionalFields.quantity || ''} // Set default value here
              onChange={handleInputChange}
              label="Quantity"
            />
            <Input
              type="file"
              name="picture"
              onChange={handleInputChange}
            />

          </>
        );
      // Add cases for other categories here
      default:
        return null;
    }
  };

  return (
    <div className="donation-request-card">
      <h3>Donation Request</h3>
      <div className="category-dropdown">
        <Select
          className='dropdown-text'
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          {categories.map((category, index) => (
            <MenuItem key={index} value={category}>{category}</MenuItem>
          ))}
        </Select>
      </div>
      {renderAdditionalFields()}
      <button className='post-button' onClick={handlePostRequest}>Post Request</button>
      {requestPosted && <p>Request posted</p>}
    </div>
  );
};

export default RequestCard;
