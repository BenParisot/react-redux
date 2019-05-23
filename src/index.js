import { createStore } from 'redux';
import { createPost, deletePost, CREATE_POST, DELETE_POST } from './actions/post-actions';
// the post should have an id and a body, which has a title and a textBody

const initialState = [{
  title: null,
  body: null
}];
// push to initialstate 
const store = createStore(reducer);

function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_POST:
      return [...state, { title: action.payload.title, body: action.payload.title }];
    case DELETE_POST: 
      return [...state, action.payload];
    default: 
      return state;
  }
}

console.log('initial store', store.getState());

store.dispatch(createPost({ title: 'My First Blog Post', body: 'This is a very cool blog' }));
console.log('added post', store.getState());

store.dispatch(createPost({ title: 'My Second Blog Post', body: 'This is a very cool blog' }));
console.log('added post', store.getState());

store.dispatch(createPost({ title: 'My Third Blog Post', body: 'This is a very cool blog' }));
console.log('added post', store.getState());
// store.dispatch(deletePost(1));
// console.log('deleted post', store.getState());

