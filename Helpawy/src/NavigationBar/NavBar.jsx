import './NavBar.css'; // Import your custom CSS file
import { AppBar, Toolbar, IconButton, Typography, Badge } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, Person, Notifications } from '@mui/icons-material';
import HomePage from '../home/home.jsx'; // Import the Home component
import Profile from '../profile/profile.jsx'; // Import the Profile component
import NotificationsPage from '../notifications/notifications.jsx'; // Import the Notifications component

const Navbar = () => {
  return (
    <Router>
      <AppBar position="static" className="navbar"> {/* Apply the navbar class */}
        <Toolbar className='toolbar'>
          <Typography variant="h6" component="div" className="navbar__title"> {/* Apply the navbar__title class */}
            My App
          </Typography>
          <IconButton color="inherit" component={Link} to="/" className="navbar__icon"> {/* Apply the navbar__icon class */}
            <Home />
          </IconButton>
          <IconButton color="inherit" component={Link} to="/profile" className="navbar__icon"> {/* Apply the navbar__icon class */}
            <Person />
          </IconButton>
          <IconButton color="inherit" component={Link} to="/notifications" className="navbar__icon"> {/* Apply the navbar__icon class */}
            <Badge badgeContent={4} color="error">
              <Notifications />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notifications" element={<NotificationsPage />} />
      </Routes>
    </Router>
  );
};

export default Navbar;
