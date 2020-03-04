import cartActionTypes from './cart.types';

const { TOGGLE_CARD_HIDDEN, ADD_ITEM } = cartActionTypes;

export const toggleCardHidden = () => ({
  type: TOGGLE_CARD_HIDDEN
});
export const addItem = item => ({
  type: ADD_ITEM,
  payload: item
});
