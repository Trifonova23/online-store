import React, { useState } from "react";
import ProductModal from "../ButtonDetails/ProductModal";
import { Form } from "react-router-dom";
import "./SingleProduct.css";
import {
  addProduct,
  deleteSingleProduct,
  deleteAllProduct,
} from "../../reducers/cart.js";
import { useSelector, useDispatch } from "react-redux";

const SingleProduct = ({ price, image, title, description, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModalHandler = (isClosed) => {
    setIsModalOpen(isClosed);
  };

  const addToCart = (data) => {
    console.log("add to SingleProduct component");

    dispatch(addProduct({ price, image, title, id })); // data to  payload
    // dispatch(deleteSingleProduct({ price, image, title, id }));
  };

  const dispatch = useDispatch();

  return (
    <>
      <div className="wrapper-single-product-box">
        <div className="single-product-box">
          <div className="img-product">
            <img src={image} alt="img" />
          </div>
          <div className="title-price-btn-cart">
            <div className="product-title">{title}</div>
            <div className="product-price">
              <i className="fa-solid fa-dollar-sign"></i> {price}{" "}
            </div>
            <div className="buttons-details-add-to-cart">
              <button onClick={() => addToCart()} className="btn-add-to-cart">
                Add To Cart
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-product-details"
              >
                <div className="icon-and-details-box">
                  <i className="fa-regular fa-hand-pointer"></i>
                  <p className="text-details">Details</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-container">
        {isModalOpen && (
          <ProductModal
            title={title}
            description={description}
            closeModal={closeModalHandler}
          />
        )}
      </div>
    </>
  );
};

export default SingleProduct;
