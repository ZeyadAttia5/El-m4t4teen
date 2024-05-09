import { useState } from 'react';
import { Card, CardContent, CardMedia, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import PropTypes from 'prop-types';
import './post.css'; // Import CSS file for styling

const OrganizationPostCard = ({ post }) => {
    const [open, setOpen] = useState(false);
    const [donorInfo, setDonorInfo] = useState(null);

    const handleViewDetailsClick = () => {
        setOpen(true);
        // Simulate fetching donor information
        // Replace this with actual logic to fetch donor info based on post
        // For demo purposes, let's assume donor info is fetched from a server
        // and stored in state
        fetchDonorInfo(post.id);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // Function to simulate fetching donor information
    const fetchDonorInfo = (postId) => {
        // Simulate fetching donor info from server
        // For demo purposes, let's assume donor info is retrieved successfully
        const donorInfo = {
            name: 'John Doe',
            profession: 'Engineer',
            contactInfo: 'john.doe@example.com'
        };
        setDonorInfo(donorInfo);
    };

    return (
        <div>
            <Card className="post-card">
                <CardContent>
                    <h2 className="post-title">{post.title}</h2>
                    <p className="post-description">{post.description}</p>
                    <p>Quantity Requested: {post.quantity_requested} </p>
                    <p>Quantity Fulfilled: {post.quantity_fulfilled} </p>
                </CardContent>
                <CardMedia
                    component="img"
                    height="150"
                    image={post.image}
                    alt={post.title}
                />
                <CardContent>
                    <Button variant="contained" className="details-button" onClick={handleViewDetailsClick}>View Details</Button>
                </CardContent>
            </Card>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{post.title}</DialogTitle>
                <DialogContent className='dialog-content'>
                    <p className="post-description">Description: {post.description}</p>
                    {donorInfo && (
                        <>
                            <p className="donor-info">Donor Name: {donorInfo.name}</p>
                            <p className="donor-info">Donor Profession: {donorInfo.profession}</p>
                            <p className="donor-info">Donor Contact Info: {donorInfo.contactInfo}</p>
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

OrganizationPostCard.propTypes = {
    post: PropTypes.object.isRequired,
};

export default OrganizationPostCard;
