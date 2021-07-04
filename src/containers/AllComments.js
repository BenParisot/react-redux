import { connect } from 'react-redux';
import { deleteComment } from '../actions/comments-actions';
import Comments from '../components/Comments';
import { getCommentsByPost } from '../selectors/comment-selectors';

const mapStateToProps = (state, { postIndex }) => {
  return {
    comments: getCommentsByPost(state, postIndex)
  };
};

const mapDispatchToProps = (dispatch, { postIndex }) => ({
  deleteComment(commentIndex) {
    dispatch(deleteComment(postIndex, commentIndex));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
