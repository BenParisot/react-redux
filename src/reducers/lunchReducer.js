import { ADD_DRINK, REMOVE_DRINK, ADD_CHIPS, REMOVE_CHIPS, ADD_SAMMIE, REMOVE_SAMMIE, EMPTY_LUNCHBOX } from '../actions/lunch-actions';

const initialState = {
  drink: null,
  chips: null,
  sandwich: null
};
  
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_DRINK:
      return { ...state, drink: action.payload };
    case REMOVE_DRINK:
      return { ...state, drink: null };
    case ADD_CHIPS:
      return { ...state, chips: action.payload };
    case REMOVE_CHIPS:
      return { ...state, chips: null };
    case ADD_SAMMIE:
      return { ...state, sandwich: action.payload };
    case REMOVE_SAMMIE:
      return { ...state, sandwich: null };
    case EMPTY_LUNCHBOX:
      return { state };
    default:
      return state;
  }
}
