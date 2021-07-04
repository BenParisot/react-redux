import { connect } from 'react-redux';
import { createComment } from '../actions/comments-actions';
import CommentForm from '../components/CommentForm';

const mapDispathToProps = (dispatch, props) => ({
  onSubmit(comment) {
    dispatch(createComment(props.postIndex, comment));
  }
});

export default connect(
  null,
  mapDispathToProps
)(CommentForm);
