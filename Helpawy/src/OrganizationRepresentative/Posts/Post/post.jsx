// import { Card, CardContent, CardMedia, Button } from '@mui/material';
// import PropTypes from 'prop-types';
// import './post.css'; // Import CSS file for styling

// const OrganizationPostCard = ({ post, onDelete, onView }) => {


//     const handleViewDetailsClick = () => {
//         onView();
//     };

//     const handleDeleteClick = () => {
//         onDelete(post.id);
//     };

//     return (
//         <div className='post-card-container'>
//             <Card className="post-card">
//                 <CardContent>
//                     <h2 className="post-title">{post.title}</h2>
//                     <p className="post-description">{post.description}</p>
//                     <p>Quantity Requested: {post.quantity_requested} </p>
//                     <p>Quantity Fulfilled: {post.quantity_fulfilled} </p>
//                 </CardContent>
//                 <CardMedia
//                     component="img"
//                     image={post.image}
//                     className='post-image'
//                     alt={post.title}
//                 />
//                 <CardContent className="card-content">
//                     <div className="button-container">
//                         <Button variant="contained" className="details-button" onClick={handleViewDetailsClick}>View Details</Button>
//                         {post.fulfilled === true && (
//                             <Button variant="contained" className="delete-button details-button" onClick={handleDeleteClick}>Delete</Button>
//                         )}
//                     </div>
//                 </CardContent>
//             </Card>

//         </div>
//     );
// };

// OrganizationPostCard.propTypes = {
//     post: PropTypes.object.isRequired,
//     onDelete: PropTypes.func.isRequired,
//     onView: PropTypes.func.isRequired,
// };

// export default OrganizationPostCard;




import { IconButton, Card, CardContent, Typography, CardActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ViewIcon from '@mui/icons-material/Visibility';
import PropTypes from 'prop-types';
import './PostCard.css'; // Import the CSS file

const PostCard = ({ post, onDelete, onViewDetails }) => {
    const handleDelete = () => {
        onDelete(post.id);
    };

    const handleViewDetails = () => {
        onViewDetails(post);
    };

    return (
        <Card variant="outlined" className="cardRoot">
            <CardContent>
                <Typography variant="h5" component="div">
                    {post.title}
                </Typography>
                <Typography color="text.secondary" gutterBottom>
                    {post.type}
                </Typography>
                <Typography color="text.secondary" gutterBottom>
                    {`ID: ${post.id}`}
                </Typography>
                <Typography variant="h5" component="div">
                    {post.description}
                </Typography>
                <Typography variant="h7" component="div" color="text.secondary">
                    {`\nRequest ${post.fulfilled ? 'fulfilled' : 'not fulfilled'}`}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className="cardActionsRoot">

                {(post.fulfilled === true && <IconButton aria-label="Delete" onClick={handleDelete} className="iconButton">
                    <DeleteIcon htmlColor='red' />
                    <Typography>Delete</Typography>
                </IconButton>)}
                <IconButton aria-label="View Details" onClick={handleViewDetails} className="iconButton">
                    <ViewIcon htmlColor='blue' />
                    <Typography>View Details</Typography>
                </IconButton>
            </CardActions>
        </Card>
    );
};

PostCard.propTypes = {
    post: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onViewDetails: PropTypes.func.isRequired,
};

export default PostCard;
