import { connect } from 'react-redux';
import PostDetail from '../components/PostDetail';
import { getPostByIndex } from '../selectors/post-selectors';

const mapStateToProps = (state, props) => ({
  post: getPostByIndex(state, props.match.params.id)
});

export default connect(
  mapStateToProps
)(PostDetail);
