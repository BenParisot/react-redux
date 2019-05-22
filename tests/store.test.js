import { createStore } from 'redux';

describe('store test', () => {
  it('adds to the store', () => {
    const initialState = {
      object: null
    };

    function reducer(state = initialState, action) {
      switch(action.type) {
        case 'ADD_OBJECT':
          return { ...state, object: action.payload };
        default: 
          return state;
      }
    }

    const store = createStore(reducer);

    store.dispatch({
      type: 'ADD_OBJECT',
      payload: 'hot tamale'
    });
    
    expect(store.getState()).toEqual({ object: 'hot tamale' });

  });
});
