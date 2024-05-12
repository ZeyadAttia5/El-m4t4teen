import './NavBar.css'; // Import your custom CSS file
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Tooltip, Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the Link component
import { Home, Person } from '@mui/icons-material';
import logo from '../assets/logo.png';

const Navbar = () => {


    const notifications = [
        'The driver is 2 minutes away!',
        'Misr el Kheir: Thank you for your generous donation ☺️',
        'Resala: Khaled, Thank you so much for your donation!',
    ];

    const navigate = useNavigate(); // Use the navigate function
    const [profileAnchorEl, setProfileAnchorEl] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = () => {
        navigate('/OrgChooseDropOffTime');
    };

    const handleHomeClick = () => {
        navigate('/HomePage');
    }


    const handleProfileClick = (event) => {
        setProfileAnchorEl(event.currentTarget);
    };

    const handleProfileSettings = () => {
        navigate('/settings');
    };

    const handleProfileClose = () => {
        setProfileAnchorEl(null);
    };

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <>
            <AppBar position="static" className="navbar">
                <Toolbar className='toolbar'>
                    <Typography variant="h6" component="div" className="navbar__title" onClick={handleHomeClick}>
                        <img src={logo} alt="Logo" width="70" height="70" className='logo' />
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

                    <div>
                        <Tooltip title="Notifications">
                            <IconButton color="inherit" onClick={handleClick}>
                                <Badge badgeContent={notifications.length} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            {notifications.map((notification, index) => (
                                <Tooltip key={index} title="Click to schedule a drop off time" placement="right">
                                    <MenuItem className="notification-item"> {/* Apply the CSS class here */}
                                        <Typography variant="body2">
                                            {notification}
                                        </Typography>
                                    </MenuItem>
                                </Tooltip>
                            ))}
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;
