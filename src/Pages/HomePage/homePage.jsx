import React, { useState, useEffect } from "react";
import SingleProductPage from "../../components/Product/SingleProduct";
import "./homePage.css";
import pic from "../../images/bag-img.png";

function HomePage() {
  const [singleProduct, setSingleProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((resSingleProduct) => resSingleProduct.json())
      .then((data) => setSingleProduct(data));
  }, []);

  return (
    // <div className="wrapper-home-page">
    //   <div className="wrapper-home-page-main-container">
    //     <div className="home-page-main-container">
    //       <div className="home-page-head-box">
    //         <p>Part of our latest offerings</p>
    //       </div>
    //       <div className="wrapper-all-products-page">
    //         <div className="main-container-all-products-page">
    //           {singleProduct.map((productInfo) => (
    //             <SingleProduct
    //               key={productInfo.id}
    //               title={productInfo.title}
    //               price={productInfo.price}
    //               image={productInfo.image}
    //               description={productInfo.description}
    //             />
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //     <div className="footer-page-main-container"></div>
    //   </div>
    // </div>
    <div className="wrapper-home-page">
      <div className="wrapper-center">
        <div className="header-home-page">
          <p>Trending Products</p>
        </div>

        <div className="products-box-home-page">
          {singleProduct.map((productInfo) => (
            <SingleProductPage
              key={productInfo.id}
              id={productInfo.id}
              title={productInfo.title}
              price={productInfo.price}
              image={productInfo.image}
              description={productInfo.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
