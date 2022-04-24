import React from "react";
import { useDispatch } from "react-redux";
import { authLogIn } from "../redux/reducers/authReducer";

import "./Auth.css";

const Auth = () => {

  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault()


    // TODO, sigin in user
    dispatch(authLogIn())
  }

  
  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
