import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Post({ post, deletePost }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <li><h3>{post.title}</h3></li>
    </Link>
  );
}
Post.propTypes = {
  deletePost: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  })
};

export default Post;
