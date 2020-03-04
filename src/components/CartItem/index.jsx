import React from 'react';
import './style.scss';
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <span className="name">{name}</span>
    <span className="price">
      {quantity} x ${price}
    </span>
    <div className="item-details"></div>
  </div>
);

export default CartItem;
