import cartActionTypes from './cart.types';
const INITIAL_STATE = {
  hidden: true
};

const cartReducer = (state = INITIAL_STATE, action) => {
  const { TOGGLE_CARD_HIDDEN } = cartActionTypes;
  switch (action.type) {
    case TOGGLE_CARD_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};

export default cartReducer;