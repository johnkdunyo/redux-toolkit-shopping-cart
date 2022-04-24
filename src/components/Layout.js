import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";


const Layout = () => {
const cartItems = useSelector(state=>state.cart.items)
const prices = []
cartItems.map((item)=>(
  prices.push  (item.quantity * item.price)
))

const totalCost = prices.reduce((prev, next)=> prev + next, 0);


  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        <div className="total-price">
          <h3>Total: ${totalCost}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}


        <CartItems />
      </div>
    </React.Fragment>
  );
};

export default Layout;
