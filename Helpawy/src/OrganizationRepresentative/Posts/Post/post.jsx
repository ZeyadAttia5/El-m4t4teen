import { IconButton, Card, CardContent, Typography, CardActions, Tooltip, Menu, MenuItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelIcon from '@mui/icons-material/Cancel';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ViewIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import PropTypes from 'prop-types';
import './PostCard.css'; // Import the CSS file

const PostCard = ({ post, onDelete, onViewDetails, onUpdateDetails }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDelete = () => {
    onDelete(post.id);
  };

  const handleUpdateDetails = () => {
    onUpdateDetails(post);
  };

  const handleViewDetails = () => {
    onViewDetails(post);
  };


  return (
    <Card variant="outlined" className="grid-container">
      <CardContent className='top-card-content'>
        <div className='post-info43'>
          <Typography variant="h5" component="div">
            {post.title}
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            {post.type}
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            {`ID: ${post.id}`}
          </Typography>
        </div>

        <div className='post-status'>
          <div>
            <IconButton aria-label="More options" onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
          </div>
          {
            post.fulfilled ? (
              <Tooltip title="Fulfilled" className='top-Bar-info' placement="left">
                <CheckCircleIcon style={{ color: 'green' }} />
                <Typography variant="h6" color='text.secondary' component="div"> Fulfilled </Typography>
              </Tooltip>
            ) : (
              <Tooltip title="Unfulfilled" className='top-Bar-info' placement="left">
                <CancelIcon style={{ color: 'red' }} />
                <Typography variant="h6" color='text.secondary' component="div"> Unfulfilled </Typography>
              </Tooltip>
            )
          }
        </div>
      </CardContent>
      <Typography variant="h5" component="div" className='post-description'>
        {post.description}
      </Typography>
      <CardActions>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem>
            <IconButton aria-label="View Details" onClick={handleViewDetails} className="iconButton">
              <ViewIcon htmlColor='blue' />
              <Typography>View Details</Typography>
            </IconButton>
          </MenuItem>
          <MenuItem>
            <IconButton aria-label="View Details" onClick={handleUpdateDetails} className="iconButton">
              <EditIcon htmlColor='blue' />
              <Typography>Edit Post</Typography>
            </IconButton>
          </MenuItem>
          <MenuItem>
            <IconButton aria-label="Delete" onClick={handleDelete} className="iconButton">
              <DeleteIcon htmlColor='red' />
              <Typography>Delete</Typography>
            </IconButton>
          </MenuItem>
        </Menu>
      </CardActions>
    </Card>
  );
};

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onViewDetails: PropTypes.func.isRequired,
  onUpdateDetails: PropTypes.func.isRequired,
};

export default PostCard;