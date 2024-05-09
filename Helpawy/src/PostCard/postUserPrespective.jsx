import { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import propTypes from 'prop-types';
import './PostCard.css'; // Import CSS file for styling

const PostCard = ({ post }) => {
    const [open, setOpen] = useState(false);
    const [donation, setDonation] = useState(1);
    const [successMessage, setSuccessMessage] = useState('');

    const handleDonateClick = () => {
        setOpen(true);
    };

    const handleFulfillDonation = () => {
        // Logic to fulfill donation goes here
        const updatedQuantityNeeded = post.quantity_requested - (parseInt(post.quantity_fulfilled) + parseInt(donation));
        console.log(updatedQuantityNeeded);
        console.log(donation);
        console.log (post.quantity_fulfilled);
        console.log (post.quantity_requested);
        if (updatedQuantityNeeded >= 0) {
            // Update the quantity needed
            post.quantity_fulfilled += parseInt(donation);

            // Display success message
            setSuccessMessage(`Donation received successfully!`);

            // Close the dialog
            setOpen(false);

            if (updatedQuantityNeeded === 0) {
                // If the quantity needed is zero, mark the post as fulfilled
                //
                post.fulfilled = true;
            }
            else {
                post.fulfilled = false;
            }
        } else {
            // If the entered donation quantity exceeds the quantity needed
            setSuccessMessage(`Error: Donation quantity exceeds the quantity needed.`);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleQuantityChange = (event) => {
        const { value } = event.target;
        // Ensure donation quantity doesn't exceed the quantity posted

        console.log(value);
        if (parseInt(value) + post.quantity_fulfilled <= post.quantity_requested) {
            setDonation(value);
        }
    };

    useEffect(() => {
        if (successMessage) {
            // Remove the success message after 3 seconds
            const timer = setTimeout(() => {
                setSuccessMessage('');
            }, 3000);

            // Clear the timer when the component unmounts or when successMessage changes
            return () => clearTimeout(timer);
        }
    }, [successMessage]);

    return (
        <div>
            <Card className="post-card">
                <CardContent>
                    <h2 className="post-title">{post.title}</h2>
                </CardContent>
                <CardMedia
                    component="img"
                    height="150"
                    image={post.image}
                    alt={post.title}

                />
                <CardContent>
                    <p className="post-quantity">Quantity Requested: {post.quantity_requested}</p>
                    {
                        post.quantity_fulfilled < post.quantity_requested && (<Button variant="contained" className="donate-button" onClick={handleDonateClick}>Donate</Button>)
                        || (post.quantity_fulfilled === post.quantity_requested && (<p>Request Fulfilled 🥳</p>))
                    }
                </CardContent>

            </Card>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{post.title}</DialogTitle>
                <DialogContent className='dialog-content'>
                    <p>Description: {post.description}</p>
                    <p>Type: {post.type}</p>
                    <p>Quantity Requested: {post.quantity_requested} </p>
                    <p>Quantity Fulfilled: {post.quantity_fulfilled} </p>
                    <TextField
                        label="Donation Quantity"
                        type="number"
                        value={parseInt(donation)}
                        onChange={handleQuantityChange}
                        inputProps={{
                            min: 1,
                            max: (post.quantity_requested - post.quantity_fulfilled)
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleFulfillDonation} disabled={post.quantity_fulfilled >= post.quantity_requested} className='form-fulfill-button'>Fulfill Donation</Button>
                    <Button onClick={handleClose} color='error' className='form-cancel-button'>Cancel</Button>
                </DialogActions>
            </Dialog>
            {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
    );
};

PostCard.propTypes = {
    post: propTypes.object.isRequired,
};

export default PostCard;
