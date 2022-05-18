import React from "react";
import "./style/heading.css";
import "./style/navbar.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { StateContext } from "./StateProvider";
function Heading() {
  function res() {
    var x = document.getElementById("topnav_bar");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  const { item } = useContext(StateContext);
  return (
    <>
      <div className="main">
      <div>
      <NavLink to="/">
          <h1 className="heading">OnlineStore</h1>
        </NavLink>
        <p className="icon" onClick={res}>
        <i className="fa fa-bars"></i>
          </p>
      </div>
        
        <div className="topnav" id="topnav_bar">
        <div id="hide_item">
          <NavLink to="/call">Products</NavLink>
          <NavLink to="/policy">Policy</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/checkouts">
            <i className="fas fa-shopping-cart" id="cart_icon">
              <sup id="icon_sup">{item.length > 0 ? item.length : ""}</sup>
            </i>
          </NavLink>
          </div>
          <div className="login-container">
            <NavLink to="/signup">
              <button type="submit">SignUp</button>
            </NavLink>
            <NavLink to="/login">
              <button type="submit">Login</button>
            </NavLink>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Heading;
