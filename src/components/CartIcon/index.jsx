import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Bag } from '../../assets/bag.svg';
import { toggleCardHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import './style.scss';

const CartIcon = ({ toggleCardHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCardHidden}>
      <Bag className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCardHidden: () => dispatch(toggleCardHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
