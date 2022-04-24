import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";

import { incrementCart, decrementCart } from "../redux/reducers/cartReducer";



const CartItem = ({ name, quantity,  price, id }) => {
  const dispatch = useDispatch();
  
  const incrementCartQty =() => {
    dispatch(incrementCart({id})) 
  };

  const decrementCartQty = () => {
    dispatch(decrementCart({id}))

  };

  const total = quantity * price;
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} </p>
      <p>x</p>
      <p>{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={decrementCartQty}>
        -
      </button>
      <button className="cart-actions" onClick={incrementCartQty}>
        +
      </button>
    </div>
  );
};

export default CartItem;
