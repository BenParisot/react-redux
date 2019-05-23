import { combineReducers } from 'redux';
import posts from './post-reducers';
import comments from './comment-reducers';

export default combineReducers({
  posts, comments
});
