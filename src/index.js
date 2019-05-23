import { createStore } from 'redux';
import { createPost, deletePost, CREATE_POST, DELETE_POST } from './actions/post-actions';
import { nullLiteral } from '@babel/types';

const initialState = {
  title: null,
  body: null
};

const store = createStore(reducer);

function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_POST:
      return { title: action.payload.title, body: action.payload.title };
    case DELETE_POST: 
      return { title: null, body: null };
    default: 
      return state;
  }
}

console.log('initial store', store.getState());

store.dispatch(createPost({ title: 'My First Blog Post', body: 'This is a very cool blog' }));
console.log('added post', store.getState());

store.dispatch(deletePost());
console.log('deleted post', store.getState());

