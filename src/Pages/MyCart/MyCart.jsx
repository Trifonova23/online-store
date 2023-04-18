import React from "react";
import "./MyCart.css";
import { deleteSingleProduct } from "../../reducers/cart";
import { useSelector, useDispatch } from "react-redux";

const MyCart = () => {
  const productsInCart = useSelector((state) => state.cart.productInCart);
  const dispatch = useDispatch();

  // const handleDelete = (product) => {
  //   dispatch(deleteSingleProduct(product.id));
  // };

  return (
    <div className="main-page-my-cart">
      {/* {productsInCart} */}
      {console.log("products in cart", productsInCart)}

      {productsInCart.map((product) => (
        <div key={product.id} className="main-products-box">
          <div className="product-box-information">
            <div className="product-img">
              <img src={product.image} alt="product img" />
            </div>

            <div className="product-id">{product.id}</div>

            <div className="product-title">{product.title}</div>

            <div className="product-price">{product.price}</div>
            <button
              onClick={() => dispatch(deleteSingleProduct(product.id))}
              // onClick={()=>handleDelete(product)}
              className="btn-remove-this-product"
            >
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyCart;

// <p> {product.image}</p>
// <p> {product.title}</p>
// <p>{product.id}</p>
// <p>{product.price}</p>
