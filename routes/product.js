let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//connect to model

let Product = require("../models/product");

//manage all routes

router.get("/", (req, res, next) => {
  Product.find((err, productlist) => {
    if (err) {
      return console.error(err);
    } else {
      //console.log(productlist);
      res.render("product/list", {
        title: "Product Info",
        ProductList: productlist,
      });
    }
  });
});

module.exports = router;
