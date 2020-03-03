import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Bag } from '../../assets/bag.svg';
import { toggleCardHidden } from '../../redux/cart/cart.actions';
import './style.scss';

const CartIcon = ({ toggleCardHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCardHidden}>
      <Bag className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCardHidden: () => dispatch(toggleCardHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);
