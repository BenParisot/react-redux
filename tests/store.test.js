import { addDrink, removeDrink, addChips, removeChips, addSammie, removeSammie } from '../src/actions/lunch-actions';
import reducer from '../src/reducers/lunchReducer';
import { createStore } from 'redux';
describe('store test', () => {

  const store = createStore(reducer);

  it('adds a drink to the store', () => {
    store.dispatch(addDrink('melk'));
    expect(store.getState()).toEqual({ drink: 'melk', chips: null, sandwich: null });
  });

  it('removes a drink from the store', () => {
    store.dispatch(removeDrink());
    expect(store.getState()).toEqual({ drink: null, chips: null, sandwich: null });  });

  it('adds a chips to the store', () => {
    store.dispatch(addChips('fritos'));
    expect(store.getState()).toEqual({ drink: null, chips: 'fritos', sandwich: null });  });

  it('removes a chips from the store', () => {
    store.dispatch(removeChips());
    expect(store.getState()).toEqual({ drink: null, chips: null, sandwich: null });  });

  it('adds a sammie to the store', () => {
    store.dispatch(addSammie('chicksen'));
    expect(store.getState()).toEqual({ drink: null, chips: null, sandwich: 'chicksen' });  });

  it('removes a sammie from the store', () => {
    store.dispatch(removeSammie());
    expect(store.getState()).toEqual({ drink: null, chips: null, sandwich: null });  });
});
