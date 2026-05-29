const express = require("express");

const routerProduct = express.Router();

const {
  createProduct,
  getproduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productcontroller");

const authMiddleware = require("../middleware/authMiddleware");

const adminMiddleware = require("../middleware/adminMiddleware");


// PUBLIC ROUTE
routerProduct.get("/all", getproduct);


// ADMIN ROUTES

// CREATE
routerProduct.post(
  "/add",
  authMiddleware,
  adminMiddleware,
  createProduct
);

// UPDATE
routerProduct.put(
  "/update/:id",
  authMiddleware,
  adminMiddleware,
  updateProduct
);

// DELETE
routerProduct.delete(
  "/delete/:id",
  authMiddleware,
  adminMiddleware,
  deleteProduct
);

module.exports = routerProduct;