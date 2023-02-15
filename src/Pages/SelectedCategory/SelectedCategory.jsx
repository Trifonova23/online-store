import { useLocation } from "react-router-dom";
import SingleProduct from "../../components/Product/SingleProduct";

function SelectedCategory() {
  const location = useLocation();
  const { state } = location;

  return (
    <div>
      <div className="wrapper-all-products-page">
        <div className="main-container-all-products-page">
          {state.message.map((productInfo) => (
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
    </div>
  );
}
export default SelectedCategory;
