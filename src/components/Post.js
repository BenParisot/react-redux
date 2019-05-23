import React from 'react';
import PropTypes from 'prop-types';

function Post({ title }) {
  return <li><h2>{title}</h2></li>;
}
Post.propTypes = {
  title: PropTypes.string.isRequired
};

export default Post;