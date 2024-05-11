import { useState } from 'react';
// import PropTypes from 'prop-types';
import PostCard from './Post/post';
import { Select, MenuItem, FormControl, InputLabel, Card, CardContent, CardMedia, List, Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import './postContainer.css';
import ecgMachine from '../../assets/ecg_machine.jpg';
import ventilator from '../../assets/ventilator.jpg';
import diazepam from '../../assets/diazepam.jpg';
import actonel from "../../assets/actonel.jpg";




const PostsContainer = () => {
  const [posts, setPosts] = useState(
    [
      {
        id: 1,
        type: 'Medical Device',
        title: 'ECG Machine',
        quantity_requested: 3,
        quantity_fulfilled: 1,
        description: 'Portable ECG Machine with 12-lead monitoring capability.',
        image: ecgMachine,
        fulfilled: false,
        donors: null
      },
      {
        id: 2,
        type: 'Medical Equipment',
        title: 'Ventilator',
        quantity_requested: 2,
        quantity_fulfilled: 1,
        description: 'Advanced ICU ventilator with built-in oxygen concentrator.',
        image: ventilator,
        fulfilled: false,
        donors: null
      },
      {
        id: 3,
        type: 'Medication',
        title: 'Diazepam',
        quantity_requested: 1,
        quantity_fulfilled: 1,
        description: 'Used to treat anxiety, seizures, alcohol withdrawal syndrome, and muscle spasms.',
        image: diazepam,
        fulfilled: true,
        donors: [
          {
            name: 'James Williams',
            case: `osteopanxiety disorders`,
            phone: '01023754123',
            email: 'jameswilliams@gmail.com',
          },
        ]
      },
      {
        id: 4,
        type: 'Medication',
        title: 'Actonel',
        quantity_requested: 9,
        quantity_fulfilled: 9,
        description: 'Used in the prevention and treatment of osteoporosis.',
        image: actonel,
        fulfilled: true,
        donors: [
          {
            name: 'John Doe',
            case: 'osteoporosis',
            phone: '01023024123',
            email: 'johndoe@gmail.com',
          },
          {
            name: 'Jane Smith',
            case: 'hypertension',
            phone: '0123456789',
            email: 'janesmith@yahoo.com',
          },
          {
            name: 'Alice Johnson',
            case: 'diabetes',
            phone: '01122334455',
            email: 'alicejohnson@hotmail.com',
          },
          {
            name: 'Bob Williams',
            case: 'asthma',
            phone: '0198765432',
            email: 'bobwilliams@outlook.com',
          },
          {
            name: 'Emily Brown',
            case: 'migraine',
            phone: '0167890123',
            email: 'emilybrown@gmail.com',
          },
          {
            name: 'Michael Wilson',
            case: 'arthritis',
            phone: '0178901234',
            email: 'michaelwilson@yahoo.com',
          },
          {
            name: 'Jessica Taylor',
            case: 'cancer',
            phone: '0189012345',
            email: 'jessicataylor@hotmail.com',
          },
          {
            name: 'David Martinez',
            case: 'heart disease',
            phone: '0145678901',
            email: 'davidmartinez@outlook.com',
          },
          {
            name: 'Olivia Miller',
            case: 'Alzheimer',
            phone: '0134567890',
            email: 'oliviamiller@gmail.com',
          },
        ]
      },
    ]);

  const [filter, setFilter] = useState('all'); // Default filter is 'all'
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleDelete = (id) => {
    const updatedPosts = posts.map(postGroup =>
      postGroup.filter(post => post.id !== id)
    );
    setPosts(updatedPosts);
  };

  const handleViewDetails = (post) => {
    // Here you can implement logic to show a popup or modal with the details
    console.log(`Handle View Details: ${post}`);
    setSelectedPost(post);
    setDialogOpen(true);

  };
  const handleDialogClose = () => {
    setDialogOpen(false);
    setSelectedPost(null);
  };


  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredPosts = filter === 'all' ? posts.flat() : posts.flat().filter(post => post.fulfilled === (filter === 'fulfilled'));
  return (
    <div className="">
      <h2>List of Donation Requests</h2>
      <FormControl variant="outlined" sx={{ minWidth: 120 }}>
        <InputLabel id="filter-label">Filter by:</InputLabel>
        <Select
          labelId="filter-label"
          id="filter"
          value={filter}
          onChange={handleFilterChange}
          label="Filter by"
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="fulfilled">Fulfilled</MenuItem>
          <MenuItem value="unfulfilled">Unfulfilled</MenuItem>
        </Select>
      </FormControl>
      <List className="listContainer">
        {filteredPosts.map(post => (
          <PostCard
            key={post.id}
            post={post}
            onDelete={handleDelete}
            onViewDetails={handleViewDetails}
          />
        ))}
      </List>
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>{selectedPost?.title}</DialogTitle>
        <DialogContent>
          <Card variant="outlined" className='request-info'>
            <Typography>{`Description: \n ${selectedPost?.description}`}</Typography>
            <Typography>{`Quantity Requested: ${selectedPost?.quantity_requested}`}</Typography>
            <Typography>{`Quantity Fulfilled: ${selectedPost?.quantity_fulfilled}`}</Typography>
            <Typography> {`Type of Request: ${selectedPost?.type}`} </Typography>
            <Typography>{`Request ID: \n ${selectedPost?.id}`}</Typography>
            <CardContent>
              <CardMedia
                component="img"
                image={selectedPost?.image}
                alt={selectedPost?.title}
              />
            </CardContent>
          </Card>
          {selectedPost?.fulfilled === true && (
            <>
              <Card variant="outlined" className='donor-info'>
                <Typography variant='h4'>{`Donor Info`}</Typography>
                {
                  (selectedPost?.donors?.map((donor, index) => (
                    console.log(donor),
                    <div key={index} className='donor-info'>
                      <Typography>{`Donor Name: ${donor.name}`}</Typography>
                      <Typography>{`Case: ${donor.case}`}</Typography>
                      <Typography>{`Phone Number: ${donor.phone}`}</Typography>
                      <Typography>{`Email: ${donor.email}`}</Typography>
                    </div>
                  )))

                }
              </Card>
            </>
          )}

        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

// PostsContainer.propTypes = {
//   posts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       type: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       quantity_requested: PropTypes.number.isRequired,
//       quantity_fulfilled: PropTypes.number.isRequired,
//       description: PropTypes.string.isRequired,
//       image: PropTypes.string.isRequired,
//       fulfilled: PropTypes.bool.isRequired,
//     })
//   ).isRequired,
// };

export default PostsContainer;



