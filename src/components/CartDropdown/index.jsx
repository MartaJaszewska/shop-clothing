import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../CustomButton';
import CartItem from '../CartItem';
import './style.scss';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem, i) => (
          <CartItem key={i} item={cartItem} />
        ))}
      </div>
      <CustomButton>CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default connect(mapStateToProps)(Cart);
