import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";


const Cart = () => {
  
  const cartItems = useSelector(state=>state.cart.items)


  return (
    <div className="cartIcon">
      <h3>Cart: {cartItems.length} Item{cartItems.length>1 && 's'}</h3>
    </div>
  );
};

export default Cart;
