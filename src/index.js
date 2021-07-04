import { createStore } from 'redux';
import { createPost, deletePost } from './actions/post-actions';
import reducer from './reducers/post-reducers';

const store = createStore(reducer);

console.log('initial store', store.getState());

store.dispatch(createPost({ title: 'My First Blog Post', body: 'This is a very cool blog' }));
console.log('added post', store.getState());

store.dispatch(createPost({ title: 'My Second Blog Post', body: 'This is a very cool blog' }));
console.log('added post', store.getState());

store.dispatch(createPost({ title: 'My Third Blog Post', body: 'This is a very cool blog' }));
console.log('added post', store.getState());

store.dispatch(deletePost(1));
console.log('deleted post', store.getState());

