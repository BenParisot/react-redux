import { connect } from 'react-redux';
import { createComment } from '../actions/comments-actions';
import CommentForm from '../components/CommentForm';

const mapDispatchToProps = (dispatch, props) => ({
  onSubmit(comment) {
    dispatch(createComment(props.postIndex, comment));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(CommentForm);
