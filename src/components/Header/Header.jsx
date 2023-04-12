import React from "react";
import "./Header.css";
import logo from "../../images/logo1-img.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const productCountInCart = useSelector(
    (state) => state.cart.productInCart.length
  );

  // const { productInCart } = useSelector((state) => state.cart); // when I get all reducers
  return (
    <nav>
      <div className="home-page-header-container">
        <div className="left-part-img-logo">
          <img src={logo} alt="shoppingSpace" />
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
            <Link to="my-cart"> {productCountInCart} My Cart </Link>
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
