import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid'
import { TextField, Select, MenuItem, Input, } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './RequestPost.css'; // Import your custom CSS file

const RequestCard = () => {
  const [selectedCategory, setSelectedCategory] = useState('Select a Category');
  const [requestPosted, setRequestPosted] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  let navigateTo = useNavigate();
  const [additionalFields, setAdditionalFields] = useState({
    season: 'default', // Set default value for season
    gender: 'default', // Set default value for gender
    type: 'default', // Set default value for type
    color: 'default', // Set default value for color
    age: 'default', // Set default value for age
    material: 'default', // Set default value for material
  });

  const categories = [
    {category: 'Select a Category', id: uuid()},
    {category: 'Clothes', id: uuid()},
    {category: 'Toys', id: uuid()},
    {category: 'Food', id: uuid()},
    {category: 'Medical Supplies', id: uuid()},
    {category: 'School Supplies', id: uuid()},
    {category: 'Blood Donations', id: uuid()},
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
              className='additional-input'
              onChange={handleInputChange}
            />

          </>
        );
      case 'Food':
        return (
          <>
            <TextField
              name='name'
              placeholder='e.g. beans'
              type='text'
              className='additional-input'
              value={additionalFields.name || ''} // Set default value here
              onChange={handleInputChange}
              label="name"
            />

            <Select
              name='category'
              className='additional-input'
              value={additionalFields.category || 'default'} // Set default value here
              onChange={handleInputChange}
              label="category"
            >
              <MenuItem value="default">Select a Category</MenuItem>
              <MenuItem value="fruitsAndVegetables">Fruits and Vegetables</MenuItem>
              <MenuItem value="cannedFoods">Canned Foods</MenuItem>
              <MenuItem value="freshMeals">Fresh Meals</MenuItem>
              <MenuItem value="bakedGoods">Baked Goods</MenuItem>
            </Select>

            <TextField
              name='quantity'
              placeholder='e.g. 1'
              type='number'
              className='additional-input'
              value={additionalFields.quantity || ''} // Set default value here
              onChange={handleInputChange}
              label={additionalFields.category === 'fruitsAndVegetables' ? 'Quantity (Kg)' : 'Quantity (Amount)'}
            />
          </>
        );
      case 'Medical Supplies':
        return (
          <>
            <Select
              name='type'
              className='additional-input'
              value={additionalFields.type || 'default'} // Set default value here
              onChange={handleInputChange}
              label="type"
            >
              <MenuItem value="default">Select a Category</MenuItem>
              <MenuItem value="medicalDevices">Medical Devices</MenuItem>
              <MenuItem value="medicalEquipment">Medical Equipment</MenuItem>
              <MenuItem value="medication">Medication</MenuItem>
            </Select>
            <Select
              name='usage'
              className='additional-input'
              value={additionalFields.usage || 'default'} // Set default value here
              onChange={handleInputChange}
              label="Usage"
            >
              <MenuItem value="default">Select the Usage</MenuItem>
              <MenuItem value="respiratorySupport">Respiratory Support</MenuItem>
              <MenuItem value="heartMonitoring">Heart Monitoring</MenuItem>
              <MenuItem value="diabetesManagement">Diabetes Management</MenuItem>
              <MenuItem value="surgicalInstruments">Surgical Instruments</MenuItem>
              <MenuItem value="imaging">Imaging</MenuItem>
              <MenuItem value="homeCare">Home Care</MenuItem>
            </Select>
            <TextField
              name='quantity'
              placeholder='e.g. 1'
              type='number'
              className='additional-input'
              value={additionalFields.quantity || ''} // Set default value here
              onChange={handleInputChange}
              label='Quantity'
            />
            <Input
              type="file"
              name="picture"
              className='additional-input'
              onChange={handleInputChange}
            />
          </>


        );
      case 'School Supplies':
        return (
          <>
            <Select
              name='type'
              className='additional-input'
              value={additionalFields.type || 'default'} // Set default value here
              onChange={handleInputChange}
              label="type"
            >
              <MenuItem value="default">Select a Category</MenuItem>
              <MenuItem value="stationary">Stationary</MenuItem>
              <MenuItem value="books">Books</MenuItem>
              {/* <MenuItem value="bags">Bags</MenuItem>
              <MenuItem value="uniforms">Uniforms</MenuItem>
              <MenuItem value="electronics">Electronics</MenuItem> */}
            </Select>

            {/* show book name, author, language, edition, short summary of the book, a picture of the book and the quantity required */}
            {additionalFields.type === 'books' && (
              <>
                <TextField
                  name='title'
                  placeholder='e.g. Math Book'
                  type='text'
                  className='additional-input'
                  value={additionalFields.title || ''} // Set default value here
                  onChange={handleInputChange}
                  label='Title'
                />
                <TextField
                  name='author'
                  placeholder='e.g. Ehab Tawfik'
                  type='text'
                  className='additional-input'
                  value={additionalFields.author || ''} // Set default value here
                  onChange={handleInputChange}
                  label='Author'
                />
                <TextField
                  name='language'
                  placeholder='e.g. English'
                  type='text'
                  className='additional-input'
                  value={additionalFields.language || ''} // Set default value here
                  onChange={handleInputChange}
                  label='Language'
                />
                <TextField
                  name='edition'
                  placeholder='e.g. 1'
                  type='number'
                  className='additional-input'
                  value={additionalFields.edition || ''} // Set default value here
                  onChange={handleInputChange}
                  label='Edition'
                />

                <TextField
                  name='summary'
                  placeholder='e.g. Math Book'
                  type='text'
                  className='additional-input'
                  value={additionalFields.summary || ''} // Set default value here
                  onChange={handleInputChange}
                  label='Summary'
                />
                <TextField
                  name='quantity'
                  placeholder='e.g. 5'
                  type='number'
                  className='additional-input'
                  value={additionalFields.quantity || ''} // Set default value here
                  onChange={handleInputChange}
                  label='Quantity'
                />
                <Input
                  type="file"
                  name="picture"
                  className='additional-input'
                  onChange={handleInputChange}
                />
              </>
            )}
            {additionalFields.type === 'stationary' && (
              <>
                <Select
                  name='category'
                  className='additional-input'
                  value={additionalFields.category || 'default'} // Set default value here
                  onChange={handleInputChange}
                  label="category"
                >
                  <MenuItem value="default">Select a Category</MenuItem>
                  <MenuItem value="pencils">Pencils</MenuItem>
                  <MenuItem value="pens">Pens</MenuItem>
                  <MenuItem value="notebooks">Notebooks</MenuItem>
                  <MenuItem value="erasers">Erasers</MenuItem>
                  <MenuItem value="rulers">Rulers</MenuItem>
                  <MenuItem value="glue">Glue</MenuItem>
                  <MenuItem value="scissors">Scissors</MenuItem>
                  <MenuItem value="highlighters">Highlighters</MenuItem>
                </Select>
                <TextField
                  name='quantity'
                  placeholder='e.g. 1'
                  type='number'
                  className='additional-input'
                  value={additionalFields.quantity || ''} // Set default value here
                  onChange={handleInputChange}
                  label='Quantity'
                />
              </>
            )}
            {/* <TextField
              name='alreadyDonated'
              placeholder='e.g. 10'
              type='number'
              className='additional-input'
              value={additionalFields.alreadyDonated || ''} // Set default value here
              onChange={handleInputChange}
              label='Already Donated'
            /> */}
          </>
        );
      case 'Blood Donations':
        return (
          <>
            {/* hospital name, governorate, hospital area, hospital address, name of patient, blood type (including RH type) */}
            <TextField
              name='hospitalName'
              placeholder='e.g. Saudi German Hospital'
              type='text'
              className='additional-input'
              value={additionalFields.hospitalName || ''} // Set default value here
              onChange={handleInputChange}
              label='Hospital Name'
            />
            <TextField
              name='governorate'
              placeholder='e.g. Cairo'
              type='text'
              className='additional-input'
              value={additionalFields.governorate || ''} // Set default value here
              onChange={handleInputChange}
              label='Governorate'
            />
            <TextField
              name='hospitalArea'
              placeholder='e.g. Nasr City'
              type='text'
              className='additional-input'
              value={additionalFields.hospitalArea || ''} // Set default value here
              onChange={handleInputChange}
              label='Hospital Area'
            />
            <TextField
              name='hospitalAddress'
              placeholder='e.g. 123 Street'
              type='text'
              className='additional-input'
              value={additionalFields.hospitalAddress || ''} // Set default value here
              onChange={handleInputChange}
              label='Hospital Address'
            />
            <TextField
              name='patientName'
              placeholder='e.g. Ahmed Ali'
              type='text'
              className='additional-input'
              value={additionalFields.patientName || ''} // Set default value here
              onChange={handleInputChange}
              label='Patient Name'
            />
            <Select
              name='bloodType'
              className='additional-input'
              value={additionalFields.bloodType || 'default'} // Set default value here
              onChange={handleInputChange}
              label="Blood Type"
            >
              <MenuItem value="default">Select Blood Type</MenuItem>
              <MenuItem value="A+">A+</MenuItem>
              <MenuItem value="A-">A-</MenuItem>
              <MenuItem value="B+">B+</MenuItem>
              <MenuItem value="B-">B-</MenuItem>
              <MenuItem value="AB+">AB+</MenuItem>
              <MenuItem value="AB-">AB-</MenuItem>
              <MenuItem value="O+">O+</MenuItem>
              <MenuItem value="O+">O-</MenuItem>
            </Select>
          </>
        );
      // Add cases for other categories here
      default:
        return null;
    }
  };


  useEffect(() => {
    if (requestPosted) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
        navigateTo('/org-main-page');
      }, 3000); // Adjust the delay time here (in milliseconds)
    }
  }, [requestPosted, navigateTo]);

  return (
    <div className="donation-request-card">
      <h3>Donation Post Request</h3>
      <div className="category-dropdown">
        <Select
          className='dropdown-text'
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          {categories.map(category => (
            <MenuItem key={category.id} value={category.category}>{category.category}</MenuItem>
          ))}
        </Select>
      </div>
      {renderAdditionalFields()}
      <button className='post-button' onClick={handlePostRequest}>Post Request</button>
      {showMessage && <p>Request posted</p>}
    </div>
  );
};

export default RequestCard;
