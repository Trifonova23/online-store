import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/homePage.jsx";
import AllProductPage from "./Pages/AllProductPage/allProductsPage.jsx";
import ProductDetails from "./Pages/ProductDetails/productDetails.jsx";
import Categories from "./Pages/Categories/Categories.jsx";
import Header from "./components/Header/Header.jsx";
import SelectedCategory from "./Pages/SelectedCategory/SelectedCategory";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="products" element={<AllProductPage />} />
          <Route path="details" element={<ProductDetails />} />
          <Route path="categories" element={<Categories />} />
          <Route path="selected-category" element={<SelectedCategory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
