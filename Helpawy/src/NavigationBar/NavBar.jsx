import './NavBar.css'; // Import your custom CSS file
import { AppBar, Toolbar, Typography, IconButton, Badge, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the Link component
import { Home, Person } from '@mui/icons-material';
import OrgNotf from '../OrganizationRepresentative/OrgNotification/OrgNotf.jsx';

const Navbar = () => {

  const navigate = useNavigate(); // Use the navigate function
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);

  const handleHomeClick = () => {
    navigate('/');
  }


  const handleProfileClick = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileAnchorEl(null);
  };


  return (
    <>
      <AppBar position="static" className="navbar">
        <Toolbar className='toolbar'>
          <Typography variant="h6" component="div" className="navbar__title">
            My App
          </Typography>

          <IconButton color="inherit" onClick={handleHomeClick} className="navbar__icon">
            <Home />
          </IconButton>

          <IconButton color="inherit" onClick={handleProfileClick} className="navbar__icon">
            <Person />
          </IconButton>

          <Menu
            anchorEl={profileAnchorEl}
            open={Boolean(profileAnchorEl)}
            onClose={handleProfileClose}
          >
            <MenuItem onClick={handleProfileClose}>Settings</MenuItem>
            <MenuItem onClick={handleProfileClose}>Log out</MenuItem>
          </Menu>

          <OrgNotf />
          
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
