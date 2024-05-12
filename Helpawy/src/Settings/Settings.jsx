import { useState } from 'react';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Settings.css'; // Import the CSS file

const SettingsComponent = () => {
    const [userInfo, setUserInfo] = useState({
        username: 'JohnDoe',
        email: 'johndoe@example.com',
        password: 'password123',
    });
    const [open, setOpen] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false); // State for delete confirmation dialog
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
    };

    const handleUpdate = () => {
        // Logic to update user information
        setOpen(true); // Show success message or error dialog
    };

    const handleDeleteAccount = () => {
        setOpenDeleteDialog(true); // Show delete confirmation dialog
    };

    const handleConfirmDelete = () => {
        // Logic to delete user account
        setOpenDeleteDialog(false); // Close delete confirmation dialog
        setTimeout(() => {
            alert(`Account deleted successfully!`);
            navigate('/login'); // Redirect to login page
        }, 2000); // Delay in milliseconds (e.g., 2000 for 2 seconds)
    };

    const handleClose = () => {
        setOpen(false);
        setOpenDeleteDialog(false);
    };

    return (
        <div className="settings-container">
            <h2>Settings</h2>
            <form className="settings-form">
                <TextField
                    label="Username"
                    name="username"
                    value={userInfo.username}
                    onChange={handleInputChange}
                />
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={userInfo.email}
                    onChange={handleInputChange}
                />
                <TextField
                    label="Password"
                    name="password"
                    type="password"
                    value={userInfo.password}
                    onChange={handleInputChange}
                />
                <Button variant="contained" color="primary" onClick={handleUpdate}>
                    Update Info
                </Button>
                <Button variant="contained" color="secondary" onClick={handleDeleteAccount}>
                    Delete Account
                </Button>
            </form>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Action Result</DialogTitle>
                <DialogContent>
                    <p className="action-result">User information updated successfully!</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
            {/* Delete confirmation dialog */}
            <Dialog open={openDeleteDialog} onClose={handleClose}>
                <DialogTitle>Confirm Account Deletion</DialogTitle>
                <DialogContent>
                    Are you sure you want to delete your account?
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleConfirmDelete} color="primary">
                        Yes, Delete
                    </Button>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default SettingsComponent;
