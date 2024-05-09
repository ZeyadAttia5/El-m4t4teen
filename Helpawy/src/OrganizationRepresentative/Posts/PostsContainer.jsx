import { useState } from 'react';
import PropTypes from 'prop-types';
import PostCard from './Post/post';
import { Select, MenuItem } from '@mui/material';

const PostsContainer = ({ posts }) => {
  const [filterCriteria, setFilterCriteria] = useState('unfulfilled');

  // Filter posts based on the selected filter criteria
  let filteredPosts;
  if (filterCriteria === 'all') {
    filteredPosts = posts;
  }
  else if (filterCriteria === 'fulfilled') {
    filteredPosts = posts.filter(post => post.fulfilled);
  }
  else if (filterCriteria === 'unfulfilled') {
    filteredPosts = posts.filter(post => !post.fulfilled);
  }

  return (
    <div>
      <h1>All Posts</h1>
      <Select value={filterCriteria} onChange={(e) => setFilterCriteria(e.target.value)}>
        <MenuItem value="all">All Posts</MenuItem>
        <MenuItem value="fulfilled">Fulfilled Posts</MenuItem>
        <MenuItem value="unfulfilled">Unfulfilled Posts</MenuItem>
      </Select>
      <div>
        {filteredPosts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

PostsContainer.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      quantity_requested: PropTypes.number.isRequired,
      quantity_fulfilled: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      fulfilled: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default PostsContainer;
