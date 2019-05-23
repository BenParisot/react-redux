import { createStore } from 'redux';
import { createPost, deletePost } from './actions/post-actions';
// import { createComment, deleteComment } from './actions/comments-actions';
import reducer from './reducers';
import { createComment, deleteComment } from './actions/comments-actions';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log('initial store', store.getState());

store.dispatch(createPost({ title: 'My First Blog Post', body: 'This is a very cool blog' }));

store.dispatch(createPost({ title: 'My Second Blog Post', body: 'This is a very cool blog' }));

store.dispatch(createPost({ title: 'My Third Blog Post', body: 'This is a very cool blog' }));

store.dispatch(deletePost(1));

store.dispatch(createComment(1, 'nice post!'));
store.dispatch(createComment(1, 'yeah, i really love this post!'));
store.dispatch(createComment(0, 'your a idiont'));

store.dispatch(deleteComment(1));



