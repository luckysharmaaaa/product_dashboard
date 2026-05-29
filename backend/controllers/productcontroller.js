const productSchema = require("../models/productSchema");

// ================= CREATE PRODUCT =================
const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      brand,
      stock,
      image,
      rating,
    } = req.body;

    const adddata = await productSchema.create({
      name,
      description,
      price,
      category,
      brand,
      stock,
      image,
      rating,
    });

    res.status(201).json({
      message: "Successfully added product details",
      data: adddata,
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
      error: err.message,
    });
  }
};

// ================= GET ALL PRODUCTS WITH SEARCH & FILTER =================
const getproduct = async (req, res) => {
  try {
    const { search, category } = req.query;

    let filter = {};

    // SEARCH BY NAME
    if (search) {
      filter.name = {
        $regex: search,
        $options: "i",
      };
    }

    // FILTER BY CATEGORY
    if (category) {
      filter.category = category;
    }

    const getdata = await productSchema.find(filter);

    res.status(200).json({
      message: "Successfully fetched products",
      data: getdata,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error!",
      error: error.message,
    });
  }
};

// ================= UPDATE PRODUCT =================
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name,
      description,
      price,
      category,
      brand,
      stock,
      image,
      rating,
    } = req.body;

    const updatedata = await productSchema.findByIdAndUpdate(
      id,
      {
        name,
        description,
        price,
        category,
        brand,
        stock,
        image,
        rating,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedata) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Successfully updated!",
      data: updatedata,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error!",
      error: error.message,
    });
  }
};

// ================= DELETE PRODUCT =================
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedata = await productSchema.findByIdAndDelete(id);

    if (!deletedata) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Successfully deleted!",
      data: deletedata,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error!",
      error: error.message,
    });
  }
};

module.exports = {
  createProduct,
  getproduct,
  updateProduct,
  deleteProduct,
};