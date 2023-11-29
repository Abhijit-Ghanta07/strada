import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Not from "./components/page/Not";
import ProductList from "./components/productsList/ProductList";
import CategoryList from "./components/productsList/CategoryList";
import FullProduct from "./components/full_product/FullProduct";
import Cart from "./components/cart/Cart";
import "./App.css";
function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<ProductList />} />
            <Route path="/:cata" element={<CategoryList />} />
            <Route path="/product/:id" element={<FullProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Not />} />
          </Route>
          <Route path="*" element={<Not />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
