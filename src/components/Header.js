import React from "react";
import { useDispatch } from "react-redux";
import { authLogOut } from "../redux/reducers/authReducer";
import Cart from "./Cart";
import "./Header.css";


const Header = () => {
  const dispatch = useDispatch();

  const onClickLogOut =() => {
    dispatch(authLogOut())
  }

  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li>
            <Cart />
          </li>
          <li>
            <button className="orderBtn" onClick={onClickLogOut}>Log out</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
