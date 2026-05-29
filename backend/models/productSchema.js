    const mongoose = require("mongoose");

    const productSchema = new mongoose.Schema(
      {
        name: {
          type: String,
          required: true,
          trim: true,
        },

        description: {
          type: String,
          trim: true,
          default: "",
        },

        price: {
          type: Number,
          required: true,
          min: 0,
        },

        category: {
          type: String,
          required: true,
          enum: [
            "Laptop",
            "Mobile",
            "Accessories",
            "Electronics",
          ],
        },

        brand: {
          type: String,
          trim: true,
        },

        stock: {
          type: Number,
          default: 0,
        },

        image: {
          type: String,
          required: true,
        },

        rating: {
          type: Number,
          min: 0,
          max: 5,
          default: 0,
        },
      },
      {
        timestamps: true,
      }
    );

    module.exports = mongoose.model("Product", productSchema);