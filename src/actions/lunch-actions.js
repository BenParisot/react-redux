export const ADD_DRINK = 'ADD_DRINK';
export const ADD_CHIPS = 'ADD_CHIPS';
export const ADD_SAMMIE = 'ADD_SAMMIE';
export const REMOVE_DRINK = 'REMOVE_DRINK';
export const REMOVE_CHIPS = 'REMOVE_CHIPS';
export const REMOVE_SAMMIE = 'REMOVE_SAMMIE';
export const EMPTY_LUNCHBOX = 'EMPTY_LUNCHBOX';

export const addDrink = drink => ({
  type: ADD_DRINK,
  payload: drink
});
export const addChips = chips => ({
  type: ADD_CHIPS,
  payload: chips
});
export const addSammie = sammie => ({
  type: ADD_SAMMIE,
  payload: sammie
});
export const removeDrink = () => ({
  type: REMOVE_DRINK
});
export const removeChips = () => ({
  type: REMOVE_CHIPS
});
export const removeSammie = () => ({
  type: REMOVE_SAMMIE
});
export const emptyLunchbox = () => ({
  type: EMPTY_LUNCHBOX
});
