import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid'
import { TextField, Button, MenuItem, Input } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './RequestPost.css'; // Import your custom CSS file

const RequestCard = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
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
    { category: 'Clothes', id: uuid() },
    { category: 'Toys', id: uuid() },
    { category: 'Food', id: uuid() },
    { category: 'Medical Supplies', id: uuid() },
    { category: 'School Supplies', id: uuid() },
    { category: 'Blood Donations', id: uuid() },
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
    event.preventDefault();
    console.log("Request posted!");
    setRequestPosted(true);
  };


  const renderAdditionalFields = () => {
    switch (selectedCategory) {
      case 'Clothes':
        return (
          <>
            {/* Dropdown menu for type */}
            <TextField
              select
              label="Type"
              value={additionalFields.type}
              onChange={handleInputChange}
              required
            >
              <MenuItem value="shirt">Shirt</MenuItem>
              <MenuItem value="pants">Pants</MenuItem>
              <MenuItem value="hoodie">Hoodie</MenuItem>
              <MenuItem value="shoes">Shoes</MenuItem>
              <MenuItem value="socks">Socks</MenuItem>

            </TextField >

            {/* Dropdown menu for age */}
            < TextField
              select
              name='age'
              value={additionalFields.age} // Set default value here
              onChange={handleInputChange}
              label="Age Group"
              required
            >
              <MenuItem value="toddlers">0-3</MenuItem>
              <MenuItem value="preschooler">3-6</MenuItem>
              <MenuItem value="child">6-9</MenuItem>
              <MenuItem value="preteen">9-12</MenuItem>
              <MenuItem value="teens">12+</MenuItem>
            </TextField >

            {/* Dropdown menu for gender */}
            < TextField
              select
              name='gender'
              className='additional-input'
              value={additionalFields.gender} // Set default value here
              onChange={handleInputChange}
              label="Gender"
              required
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </TextField >

            {/* Dropdown menu for season */}
            < TextField
              select
              name='season'
              className='additional-input'
              value={additionalFields.season} // Set default value here
              onChange={handleInputChange}
              label="season"
              required
            >
              <MenuItem value="winter">Winter</MenuItem>
              <MenuItem value="summer">Summer</MenuItem>
            </TextField >

            {/* Dropdown menu for color */}
            < TextField
              select
              name='color'
              className='additional-input'
              value={additionalFields.color} // Set default value here
              onChange={handleInputChange}
              label="Color"
            >
              <MenuItem value="red">Red</MenuItem>
              <MenuItem value="khaki">Khaki</MenuItem>
              <MenuItem value="black">Black</MenuItem>
              <MenuItem value="cyan">Cyan</MenuItem>
            </TextField >

            {/* Dropdown menu for material */}

            < TextField
              select
              className='additional-input'
              name="material"
              value={additionalFields.material}
              onChange={handleInputChange}
              label="material"
            >
              <MenuItem value="cotton">Cotton</MenuItem>
              <MenuItem value="polyester">Polyester</MenuItem>
              <MenuItem value="silk">Silk</MenuItem>
            </TextField >
            {/* Add more additional fields here */}

            {/* Input for quantity */}
            <TextField
              name='quantity'
              required
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
            < TextField
              select
              required
              name="type"
              label="Type"
              value={additionalFields.type}
              onChange={handleInputChange}
            >

              <MenuItem value="educational">Educational</MenuItem>
              <MenuItem value="plush">Plush</MenuItem>
              <MenuItem value="electronic">Electronic</MenuItem>
            </TextField>

            {/* Dropdown menu for type */}
            <TextField
              select
              className='additional-input'
              name='category'
              value={additionalFields.category} // Set default value here
              onChange={handleInputChange}
              label="category"
            >
              <MenuItem value="board-games">Board Games</MenuItem>
              <MenuItem value="stuffed-toys">Stuffed Toys</MenuItem>
              <MenuItem value="dolls"> Dolls</MenuItem>
              <MenuItem value="sports">Sports</MenuItem>
              <MenuItem value="shoes">Cars</MenuItem>
              <MenuItem value="socks">Outdoor</MenuItem>
            </TextField>

            {/* Dropdown menu for age group*/}
            <TextField
              select
              className='additional-input'
              name='ageGroup'
              value={additionalFields.ageGroup} // Set default value here
              onChange={handleInputChange}
              label="Age Group"
              required
            >
              <MenuItem value="toddlers">0-3</MenuItem>
              <MenuItem value="preschooler">3-6</MenuItem>
              <MenuItem value="child">6-9</MenuItem>
              <MenuItem value="preteen">9-12</MenuItem>
              <MenuItem value="teens">12+</MenuItem>
            </TextField>

            {/* Dropdown menu for gender */}
            < TextField
              select
              name='gender'
              className='additional-input'
              value={additionalFields.gender} // Set default value here
              onChange={handleInputChange}
              label="gender"
            >
              <MenuItem value="boy">Boy</MenuItem>
              <MenuItem value="girl">Girl</MenuItem>
            </TextField>

            {/* Input for quantity */}
            <TextField
              name='quantity'
              required
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
              required
              name='name'
              placeholder='e.g. beans'
              type='text'
              className='additional-input'
              value={additionalFields.name || ''} // Set default value here
              onChange={handleInputChange}
              label="name"
            />

            < TextField
              required
              select
              name='category'
              className='additional-input'
              value={additionalFields.category} // Set default value here
              onChange={handleInputChange}
              label="category"
            >
              <MenuItem value="fruitsAndVegetables">Fruits and Vegetables</MenuItem>
              <MenuItem value="cannedFoods">Canned Foods</MenuItem>
              <MenuItem value="freshMeals">Fresh Meals</MenuItem>
              <MenuItem value="bakedGoods">Baked Goods</MenuItem>
            </TextField>

            <TextField
              required
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
            < TextField
              select
              required
              name='type'
              className='additional-input'
              value={additionalFields.type} // Set default value here
              onChange={handleInputChange}
              label="type"
            >
              <MenuItem value="medicalDevices">Medical Devices</MenuItem>
              <MenuItem value="medicalEquipment">Medical Equipment</MenuItem>
              <MenuItem value="medication">Medication</MenuItem>
            </TextField>

            < TextField
              required
              select
              name='usage'
              className='additional-input'
              value={additionalFields.usage} // Set default value here
              onChange={handleInputChange}
              label="Usage"
            >
              <MenuItem value="respiratorySupport">Respiratory Support</MenuItem>
              <MenuItem value="heartMonitoring">Heart Monitoring</MenuItem>
              <MenuItem value="diabetesManagement">Diabetes Management</MenuItem>
              <MenuItem value="surgicalInstruments">Surgical Instruments</MenuItem>
              <MenuItem value="imaging">Imaging</MenuItem>
              <MenuItem value="homeCare">Home Care</MenuItem>
            </TextField>
            <TextField
              required
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
            < TextField
              required
              select
              name='type'
              className='additional-input'
              value={additionalFields.type} // Set default value here
              onChange={handleInputChange}
              label="type"
            >
              <MenuItem value="stationary">Stationary</MenuItem>
              <MenuItem value="books">Books</MenuItem>
              {/* <MenuItem value="bags">Bags</MenuItem> */}
              {/*<MenuItem value="uniforms">Uniforms</MenuItem>
              <MenuItem value="electronics">Electronics</MenuItem> */}
            </TextField>

            {/* show book name, author, language, edition, short summary of the book, a picture of the book and the quantity required */}
            {additionalFields.type === 'books' && (
              <>
                <TextField
                  required
                  name='title'
                  placeholder='e.g. Math Book'
                  type='Subject'
                  className='additional-input'
                  value={additionalFields.title || ''} // Set default value here
                  onChange={handleInputChange}
                  label='Title'
                />
                <TextField
                  required
                  name='author'
                  placeholder='e.g. Ehab Tawfik'
                  type='text'
                  className='additional-input'
                  value={additionalFields.author || ''} // Set default value here
                  onChange={handleInputChange}
                  label='Author'
                />
                <TextField
                  required
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
                  required
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
                < TextField
                  required
                  select
                  name='category'
                  className='additional-input'
                  value={additionalFields.category} // Set default value here
                  onChange={handleInputChange}
                  label="category"
                >
                  <MenuItem value="pencils">Pencils</MenuItem>
                  <MenuItem value="pens">Pens</MenuItem>
                  <MenuItem value="notebooks">Notebooks</MenuItem>
                  <MenuItem value="erasers">Erasers</MenuItem>
                  <MenuItem value="rulers">Rulers</MenuItem>
                  <MenuItem value="glue">Glue</MenuItem>
                  <MenuItem value="scissors">Scissors</MenuItem>
                  <MenuItem value="highlighters">Highlighters</MenuItem>
                </TextField>
                <TextField
                  required
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
              required
              name='hospitalName'
              placeholder='e.g. Saudi German Hospital'
              type='text'
              className='additional-input'
              value={additionalFields.hospitalName || ''} // Set default value here
              onChange={handleInputChange}
              label='Hospital Name'
            />
            <TextField
              required
              name='governorate'
              placeholder='e.g. Cairo'
              type='text'
              className='additional-input'
              value={additionalFields.governorate || ''} // Set default value here
              onChange={handleInputChange}
              label='Governorate'
            />
            <TextField
              required
              name='hospitalArea'
              placeholder='e.g. Nasr City'
              type='text'
              className='additional-input'
              value={additionalFields.hospitalArea || ''} // Set default value here
              onChange={handleInputChange}
              label='City/Area'
            />
            <TextField
              required
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
              required
              placeholder='e.g. Ahmed Ali'
              type='text'
              className='additional-input'
              value={additionalFields.patientName || ''} // Set default value here
              onChange={handleInputChange}
              label='Patient Name'
            />
            < TextField
              required
              select
              name='bloodType'
              className='additional-input'
              value={additionalFields.bloodType} // Set default value here
              onChange={handleInputChange}
              label="Blood Type"
            >
              <MenuItem value="A+">A+</MenuItem>
              <MenuItem value="A-">A-</MenuItem>
              <MenuItem value="B+">B+</MenuItem>
              <MenuItem value="B-">B-</MenuItem>
              <MenuItem value="AB+">AB+</MenuItem>
              <MenuItem value="AB-">AB-</MenuItem>
              <MenuItem value="O+">O+</MenuItem>
              <MenuItem value="O+">O-</MenuItem>
            </TextField>
          </>
        );
      // Add cases for other categories here
      default:
        return null;
    }
  };

  const handleCancel = () => {

    navigateTo('/OrgDashboard');
  };


  useEffect(() => {
    if (requestPosted) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
        navigateTo('/OrgDashboard');
      }, 3000); // Adjust the delay time here (in milliseconds)
    }
  }, [requestPosted, navigateTo]);

  return (
    <div className="donation-request-card">
      <h3>Donation Post Request</h3>
      <form onSubmit={handlePostRequest} className='form-container' >
        <div className="category-dropdown">
          < TextField
            required
            select
            className='dropdown-text'
            id="category"
            label="Category"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            {categories.map(category => (
              <MenuItem key={category.id} value={category.category}>{category.category}</MenuItem>
            ))}
          </TextField>
        </div>
        {renderAdditionalFields()}
        <div className='form-buttons'>
          <Button className='post-button' onClick={handleCancel}>Cancel</Button>
          <Button type="submit" className='post-button'>Post Request</Button>
        </div>
      </form>
      {showMessage && <p>Request posted</p>}
    </div>
  );
};

export default RequestCard;
