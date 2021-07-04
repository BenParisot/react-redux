import React from 'react';
import PropTypes from 'prop-types';

function Comment({ commentIndex, comment, deleteComment }) {
  return (
    <section>
      <p>{comment}</p>
      <p onClick={deleteComment.bind(null, commentIndex)}>Delete this comment</p>
      <hr />
    </section>
  );
}
Comment.propTypes = {
  commentIndex: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  deleteComment: PropTypes.func.isRequired
};

export default Comment;
