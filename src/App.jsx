import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import CategoryStrip from "./components/CategoryStrip";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

function App() {
  return (
    <div className="min-h-screen bg-page">
      <Header />

      <CategoryStrip />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/login"
          element={<Login />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;