import './NavBar.css'; // Import your custom CSS file
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the Link component
import { Home, Person } from '@mui/icons-material';
import OrgNotf from '../OrgNotification/OrgNotf.jsx';
import logo from '../../assets/logo.png';

const Navbar = () => {

  const navigate = useNavigate(); // Use the navigate function
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);

  const handleHomeClick = () => {
    navigate('/');
  }


  const handleProfileClick = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileSettings = () => {
    navigate('settings');
  };

  const handleProfileClose = () => {
    setProfileAnchorEl(null);
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <>
      <AppBar position="static" className="navbar">
        <Toolbar className='toolbar'>
          <Typography variant="h6" component="div" className="navbar__title" onClick={handleHomeClick}>
          <img src={logo} alt="Logo" width="70" height="70" className='logo'/>
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
            <MenuItem onClick={handleProfileSettings}>Settings</MenuItem>
            <MenuItem onClick={handleLogout}>Log out</MenuItem>
          </Menu>

          <OrgNotf />
          
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
