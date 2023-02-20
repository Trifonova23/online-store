import React from "react";
import { useNavigate } from "react-router-dom";
import electronicImg from "../../images/electronic-pic.png";
import menImg from "../../images/mens-pic.png";
import jewelryImg from "../../images/jewelry-pic.png";
import womenImg from "../../images/women-img.png";

import "./Categories.css";

const Categories = () => {
  const navigate = useNavigate();

  const navigateSelectedCategory = (param, dataCategory) => {
    navigate(param, { state: { message: dataCategory } });
  };

  const onButtonClickCategory = async (category) => {
    let dataInformationCategory = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    )
      .then((resData) => resData.json())
      .then((data) => data);
    navigateSelectedCategory("/selected-category", dataInformationCategory);
  };

  return (
    <div className="wrapper-categories-page">
      <div className="main-box-categories">
        <div className="category-electronic">
          <img src={electronicImg} alt="" />
          <button
            className="button"
            onClick={() => {
              onButtonClickCategory("electronics");
            }}
          >
            Electronic
          </button>
        </div>
        <div className="category-men-clothing">
          <img src={menImg} alt="" />
          <button
            className="button"
            onClick={() => onButtonClickCategory("men's clothing")}
          >
            Men`s Clothing
          </button>
        </div>
        <div className="category-jewelry">
          <img src={jewelryImg} alt="" />
          <button
            className="button"
            onClick={() => onButtonClickCategory("jewelery")}
          >
            Jewelry
          </button>
        </div>
        <div className="category-wom-clothing">
          <img src={womenImg} alt="" />
          <button
            className="button"
            onClick={() => onButtonClickCategory("women's clothing")}
          >
            Women`s Clothing
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
