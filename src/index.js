import { createStore } from 'redux';

const initialState = {
  drink: null,
  chips: null,
  sandwich: null
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_DRINK':
      return { ...state, drink: action.payload };
    case 'REMOVE_DRINK':
      return { ...state, drink: null };
    case 'ADD_CHIPS':
      return { ...state, chips: action.payload };
    case 'REMOVE_CHIPS':
      return { ...state, chips: null };
    case 'ADD_SAMMIE':
      return { ...state, sandwich: action.payload };
    case 'REMOVE_SAMMIE':
      return { ...state, sandwich: null };
    case 'EMPTY-LUNCHBOX':
      return { state };
    default:
      return state;
  }
}

const store = createStore(reducer);
const ADD_DRINK = 'ADD_DRINK';
const ADD_CHIPS = 'ADD_CHIPS';
const ADD_SAMMIE = 'ADD_SAMMIE';
const REMOVE_DRINK = 'REMOVE_DRINK';
const REMOVE_CHIPS = 'REMOVE_CHIPS';
const REMOVE_SAMMIE = 'REMOVE_SAMMIE';
const EMPTY_LUNCHBOX = 'EMPTY_LUNCHBOX';

const addDrink = drink => ({
  type: ADD_DRINK,
  payload: drink
});
const addChips = chips => ({
  type: ADD_CHIPS,
  payload: chips
});
const addSammie = sammie => ({
  type: ADD_SAMMIE,
  payload: sammie
});
const removeDrink = () => ({
  type: REMOVE_DRINK
});
const removeChips = () => ({
  type: REMOVE_CHIPS
});
const removeSammie = () => ({
  type: REMOVE_SAMMIE
});
const emptyLunchbox = () => ({
  type: EMPTY_LUNCHBOX
});

console.log('initial store', store.getState());

store.dispatch(addDrink('fresca'));
console.log('add drink', store.getState());

store.dispatch(removeDrink());
console.log('remove drink', store.getState());

store.dispatch(addChips('fritos'));
console.log('add chips', store.getState());

store.dispatch(removeChips());
console.log('remove chips', store.getState());

store.dispatch(addSammie('roast beast'));
console.log('add sammie', store.getState());

store.dispatch(removeSammie());
console.log('remove sammie', store.getState());

store.dispatch(emptyLunchbox());
console.log('emptied lunchbox', store.getState());
