import cartActionTypes from './cart.types';

const { TOGGLE_CARD_HIDDEN } = cartActionTypes;

export const toggleCardHidden = () => ({
  type: TOGGLE_CARD_HIDDEN
});
