import React from "react";
import "./ProductModal.css";

const ProductModal = ({ closeModal, description, title }) => {
  return (
    <div className="modal-box">
      <div className="wrapper-modal-box">
        <div className="modal-box-button">
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <div className="modal-box-title">
          <p className="product-title-text">{title}</p>
        </div>
        <div className="modal-box-text">
          <p className="product-description-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
