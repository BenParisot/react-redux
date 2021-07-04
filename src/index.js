import { createStore } from 'redux';
import { addDrink, removeDrink, addChips, removeChips, addSammie, removeSammie, emptyLunchbox } from './actions/lunch-actions';
import reducer from '../src/reducers/lunchReducer';

const store = createStore(reducer);



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
