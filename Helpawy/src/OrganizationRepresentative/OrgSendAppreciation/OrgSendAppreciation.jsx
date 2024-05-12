import { useState } from 'react';
import { TextField, Button, Snackbar, Typography, Card, CardContent } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import './OrgSendAppreciation.css'; // Import the CSS file

const OrgSendAppreciation = () => {

    const [donor, setDonor] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        donationType: 'Medication',
        donationTitle: 'Diazepam',
        donationAmount: '2',
    });
    const [message, setMessage] = useState(`${donor.name}, thank you for donating ${donor.donationAmount} ${donor.donationTitle}!`);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openError, setOpenError] = useState(false);



    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSend = () => {
        if (message.trim() === '') {
            // Don't send the message if it's empty
            setOpenError(true); // Open the error Snackbar
            return;
        }

        // Here you can handle the send action, for example, send the message to a server
        console.log('Appreciation message sent:', message);
        setMessage(''); // Clear the message input after sending
        setOpenSuccess(true); // Open the success Snackbar
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSuccess(false);
        setOpenError(false);
    };

    return (
        <div className="appreciation-container">
            <Typography variant="h4" component="h1" gutterBottom>
                Send an Appreciation Message to the Donor
            </Typography>
            <Card className="donor-info-card">
                <CardContent>
                    <Typography variant="h6"> Donor&apos;s Information:</Typography>
                    <Typography variant="body1">Name: {donor.name}</Typography>
                    <Typography variant="body1">Email: {donor.email}</Typography>
                    <Typography variant="body1">Donation Type: {donor.donationType}</Typography>
                    <Typography variant="body1">Donation Title: {donor.donationTitle}</Typography>
                    <Typography variant="body1">Donation Amount: {donor.donationAmount}</Typography>
                </CardContent>
            </Card>
            <TextField
                label="Appreciation Message"
                multiline
                rows={4}
                variant="outlined"
                value={message}
                onChange={handleChange}
                placeholder="Enter your appreciation message here"
                fullWidth
            />
            <Button variant="contained" color="primary" onClick={handleSend} className="appreciation-button">
                Send
            </Button>
            <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleClose}>
                <MuiAlert onClose={handleClose} severity="success" elevation={6} variant="filled">
                    Appreciation message sent successfully!
                </MuiAlert>
            </Snackbar>
            <Snackbar open={openError} autoHideDuration={6000} onClose={handleClose}>
                <MuiAlert onClose={handleClose} severity="error" elevation={6} variant="filled">
                    You cannot send an empty message!
                </MuiAlert>
            </Snackbar>
        </div>
    );
};

export default OrgSendAppreciation;