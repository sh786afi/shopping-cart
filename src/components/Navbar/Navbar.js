import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.jpg";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div class="header">
        <div className="main-logo">
          <Link to="/">
            <img src={logo} alt="store" className="logo" />
          </Link>
        </div>

        <div className="nav-left">
          <ul>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Products
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <Link to="/cart" className="myCart">
            <i className="fas fa-cart-plus">My Cart</i>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
