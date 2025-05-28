import "./App.css";
import React, { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import AddProduct from "./components/AddProduct";
import Product from "./components/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./Context/Context";
import UpdateProduct from "./components/UpdateProduct";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import About from "./components/About";
import ContactUs from "./components/Contact";
import LoginPage from "./components/Login";
import HomePage from "./components/HomePage";
import ProtectedRoute from "./components/ProtectedRoute"; // 👈 Add this import
import "./index.css"; // Assuming you have a styles.css file for global styles
import Register from "./components/Register";

function App() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    console.log("Selected category:", category);
  };

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <AppProvider>
      <BrowserRouter>
        <Navbar onSelectCategory={handleCategorySelect} />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home addToCart={addToCart} selectedCategory={selectedCategory} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route
            path="/add_product"
            element={
              <ProtectedRoute>
                <AddProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path="/product"
            element={
              <ProtectedRoute>
                <Product />
              </ProtectedRoute>
            }
          />
          <Route
            path="product/:id"
            element={
              <ProtectedRoute>
                <Product />
              </ProtectedRoute>
            }
          />
          <Route
            path="/product/update/:id"
            element={
              <ProtectedRoute>
                <UpdateProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
