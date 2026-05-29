const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();
const port = 3000;

const db = require("./config/mongodb");
const router = require("./routes/adminRoutes");
const routerProduct = require("./routes/productrouter")


db(); // connect mongodb

// middleware
app.use(express.json());
app.use(cors()); // FIXED

// routes
app.use("/admin", router);
app.use("/products" , routerProduct)

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(port, () => {
  console.log(
    `Server is running at :- http://localhost:${port}`
  );
});