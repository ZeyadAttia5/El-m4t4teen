import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, Badge, Tooltip, Menu, MenuItem, Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './OrgNotf.css'; // Import the CSS file

const OrgNotf = () => {
  const navigate = useNavigate();
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

  const notifications = [
    'John Doe wants to Donate 10 Pencils!',
    'Jane Doe wants to Donate 5 Notebooks!',
    'John Smith wants to Donate 2 Erasers!',
    'Jane Smith wants to Donate 2 Diazepam!'
  ];

  return (
    <>
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
            <MenuItem onClick={handleMenuItemClick} className="notification-item"> {/* Apply the CSS class here */}
              <Typography variant="body2">
                {notification}
              </Typography>
            </MenuItem>
          </Tooltip>
        ))}
      </Menu>
    </>
  );
};

export default OrgNotf;