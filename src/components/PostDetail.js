import React from 'react';
import PropTypes from 'prop-types';
// import CommentsByPostId from '../containers/CommentsByPostId';
// import CreateComment from '../containers/CreateComment';

export default function PostDetail({ post }) {
  const paras = post.body.split('\n').map((p, i) => (
    <p key={i}>{p}</p>
  ));
  return (
    <section>
      <h1>{post.title}</h1>
      <p>{paras}</p>
    </section>
  );
}

PostDetail.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
};
