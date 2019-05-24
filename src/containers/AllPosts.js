import { connect } from 'react-redux';
import { getAllPosts } from  '../selectors/post-selectors';
import { deletePost } from '../actions/post-actions';
import Posts from '../components/Posts';

const mapStateToProps = state => ({
  posts: getAllPosts(state)
});

const mapDispatchToProps = dispatch => ({
  deletePost(id) {
    dispatch(deletePost(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);

