import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function Posts({ posts }) {
  const postList = posts.map((post, i) => {
    return <Post key={i} title={post.title} />;
  });
    
  return (
    <ul>
      {postList}
    </ul>
  );
}
Posts.propTypes = {
  posts: PropTypes.array.isRequired
};

export default Posts;
