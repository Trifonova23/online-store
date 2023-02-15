import React from "react";

const Product = ({ title, price, description, image }) => {
  return (
    <div className="product-box">
      <div className="product-image">
        <img src={image} alt="" />
        {
          <div className="product-price">
            <div className="product-name"> {title}</div>
            <div className="product-price"> {price} </div>
            <div className="product-description">{description}</div>
            <button className="btn-product-details">Details</button>
          </div>
        }
      </div>
    </div>
  );
};

export default Product;
