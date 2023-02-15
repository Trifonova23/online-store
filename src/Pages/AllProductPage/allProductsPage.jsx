import React, { useState, useEffect } from "react";
import SingleProduct from "../../components/Product/SingleProduct";
import "./allProductsPage.css";

function AllProductPage() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resProduct) => resProduct.json())
      .then((data) => setProductData(data));
  }, []);
  return (
    <div className="wrapper-all-products-page">
      <div className="main-container-all-products-page">
        {productData.map((productInfo) => (
          <SingleProduct
            key={productInfo.id}
            title={productInfo.title}
            price={productInfo.price}
            image={productInfo.image}
            description={productInfo.description}
          />
        ))}
      </div>
    </div>
  );
}

export default AllProductPage;
