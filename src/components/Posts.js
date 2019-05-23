import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function Posts({ posts, deletePost }) {
  const postList = posts.map((post) => {
    return <Post key={post.id} deletePost={deletePost} title={post.title} />;
  });
    
  return (
    <ul>
      {postList}
    </ul>
  );
}
Posts.propTypes = {
  posts: PropTypes.arrayOf.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }),
  deletePost: PropTypes.func.isRequired
};

export default Posts;
