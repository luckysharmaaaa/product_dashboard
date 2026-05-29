import React from "react";

import Login from "./pages/Login";
import Register from "./pages/Resgister";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import EditProducts from "./pages/EditProducts";
import Cart from "./pages/Cart";

import Layout from "./pages/Layout";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {

  // GET ROLE
  const role = localStorage.getItem("role");

  return (

    <BrowserRouter>

      <Routes>

        {/* DEFAULT REDIRECT */}
        <Route
          path="/"
          element={<Navigate to="/register" />}
        />

        {/* AUTH ROUTES */}
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* LAYOUT ROUTES */}
        <Route element={<Layout />}>

          <Route
            path="/home"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/products"
            element={<Products />}
          />

          {/* CART ROUTE */}
          <Route
            path="/cart"
            element={<Cart />}
          />

          {/* ADMIN ONLY ROUTE */}
          <Route
            path="/edit-products"
            element={
              role === "admin"
                ? <EditProducts />
                : <Navigate to="/products" />
            }
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;