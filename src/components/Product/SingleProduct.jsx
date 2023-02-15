import React, { useState } from "react";
import ProductModal from "../ButtonDetails/ProductModal";

const SingleProduct = ({ price, image, title, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModalHandler = (isClosed) => {
    setIsModalOpen(isClosed);
  };

  return (
    <div className="single-product-box">
      <div className="product-img">
        <div className="product-image-box">
          <img src={image} alt="" />
        </div>
        {
          <div className="product-name-and-price">
            <div className="product-name">{title}</div>
            <div className="product-price">
              <i className="fa-solid fa-dollar-sign"></i> {price}{" "}
            </div>
            <div className="description-product">
              <p className="description-text">
                {description ? description : ""}
              </p>
            </div>
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
        }
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
    </div>
  );
};

export default SingleProduct;
