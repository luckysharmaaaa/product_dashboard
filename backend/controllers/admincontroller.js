const adminSchema = require("../models/adminSchema.js");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");


// REGISTER
const registerAdmin = async (req, res) => {

  try {

    const {
      name,
      email,
      password,
      role,
    } = req.body;

    // CHECK EXISTING USER
    const existuser =
      await adminSchema.findOne({ email });

    if (existuser) {

      return res.status(400).json({
        success: false,
        message: "Admin already exists!",
      });

    }

    // HASH PASSWORD
    const hashpassword =
      await bcrypt.hash(password, 10);

    // CREATE USER
    const createuser =
      await adminSchema.create({
        name,
        email,
        password: hashpassword,
        role,
      });

    res.status(201).json({
      success: true,
      message: "Successfully Registered User",
      data: createuser,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });

  }
};


// LOGIN
const loginAdmin = async (req, res) => {

  try {

    const { email, password } = req.body;

    // CHECK USER
    const existuser =
      await adminSchema.findOne({ email });

    if (!existuser) {

      return res.status(400).json({
        success: false,
        message: "User not found",
      });

    }

    // CHECK PASSWORD
    const isMatch =
      await bcrypt.compare(
        password,
        existuser.password
      );

    if (!isMatch) {

      return res.status(400).json({
        success: false,
        message: "Invalid Password!",
      });

    }

    // GENERATE TOKEN
    const token = jwt.sign(
      {
        id: existuser._id,
        role: existuser.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    // RESPONSE
    res.status(200).json({
      success: true,
      message: "Successfully Login!",
      token,
      data: existuser,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });

  }
};

module.exports = {
  registerAdmin,
  loginAdmin,
};