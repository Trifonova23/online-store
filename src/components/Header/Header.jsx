import React from "react";
import "./Header.css";
import logo from "../../images/SSpotLogo.png";
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
          <Link className="nav-home" to="/">
            Home
          </Link>

          <Link className="nav-all-products" to="products">
            All Products
          </Link>

          <Link className="nav-categories" to="categories">
            Categories
          </Link>
        </div>
        <div className="cart-box">
          <Link className="button" to="my-cart">
            {" "}
            {productCountInCart} My Cart
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
