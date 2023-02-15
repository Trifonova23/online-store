import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="home-page-header-container">
        <div className="left-part-img-logo">
          <img src="logo1-img.png" alt="shoppingSpace" />
        </div>
        <div className="navLinks">
          <button className="nav-home">
            <Link to="/">Home</Link>
          </button>
          <button className="nav-all-products">
            <Link to="products">All Products</Link>
          </button>
          <button className="nav-categories">
            <Link to="categories">Categories</Link>
          </button>
        </div>
        <div className="cart-box">
          <button className="button">
            <i className="fa-solid fa-cart-shopping"></i>
            <p>My Cart</p>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
