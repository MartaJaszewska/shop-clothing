import React from 'react';
import CustomButton from '../CustomButton';
import './style.scss';

const Cart = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>CHECKOUT</CustomButton>
    </div>
  );
};

export default Cart;
