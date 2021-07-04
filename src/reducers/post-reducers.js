import { CREATE_POST, DELETE_POST } from '../actions/post-actions';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_POST:
      return [...state, { title: action.payload.title, body: action.payload.body }];
    case DELETE_POST: 
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
    default: 
      return state;
  }
}
