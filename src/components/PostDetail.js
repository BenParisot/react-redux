import React from 'react';
import PropTypes from 'prop-types';
import AllComments from '../containers/AllComments';
import CreateComment from '../containers/CreateComment';

function PostDetail({ post }) {
  // const paras = post.body.split('\n').map((p, i) => (
  //   <p key={i}>{p}</p>
  // ));
  return (
    <>
    <section>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </section>
    <section>
      <h3>Comments:</h3>
      <AllComments postIndex={post.postIndex} />
      <CreateComment postIndex={post.postIndex} /> 
    </section>
    </>
  );
}

PostDetail.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
};

export default PostDetail;
