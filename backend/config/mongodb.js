const mongoose = require("mongoose");
require("dotenv").config();

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Mongodb is connected");
  } catch (err) {
    console.log("Database Connection Error", err);
  }
};

module.exports = db;
