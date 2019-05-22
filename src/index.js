//import redux 

import { createStore } from 'redux';

//set state to hold lunch: drink, chips, sandwich

const initialState = {
  drink: null,
  chips: null,
  sandwich: null
};

//create a reduce to add/remove  state items

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_DRINK':
      return { ...state, drink: action.payload };
    case 'REMOVE_DRINK':
      return { ...state, drink: state.drink };
    case 'ADD_CHIPS':
      return { ...state, chips: action.payload };
    case 'REMOVE_CHIPS':
      return { ...state, chips: state.chips };
    case 'ADD-SAMMIE':
      return { ...state, sandwich: action.payload };
    case 'REMOVE_SAMMIE':
      return { ...state, sandwich: state.sandwich };
    case 'EMPTY-LUNCHBOX':
      return { state };
    default:
      return state;
  }
}

const store = createStore(reducer);
//write dispatch actions to add/remove state items

console.log('initial store', store.getState());

store.dispatch({
  type: 'ADD_DRINK',
  payload: 'Fresca'
});

console.log('add drink', store.getState());


store.dispatch({
  type: 'REMOVE_DRINK'
});

console.log('remove drink', store.getState());

store.dispatch({
  type: 'ADD_CHIPS',
  payload: 'Fritos Scoops'
});

console.log('add chips', store.getState());

store.dispatch({
  type: 'REMOVE_CHIPS'
});

console.log('remove chips', store.getState());

store.dispatch({
  type: 'ADD_SAMMIE',
  payload: 'roast beast'
});
console.log('add sammie', store.getState());

store.dispatch({
  type: 'REMOVE_SAMMIE',
});

console.log('remove sammie', store.getState());

store.dispatch({
  type: 'EMPTY_LUNCHBOX'
});

console.log('emptied lunchbox', store.getState());
