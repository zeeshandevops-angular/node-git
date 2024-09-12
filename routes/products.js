const express = require("express");
const router = express.Router();

const [getAllProducts] = require("../controller/products")

router.route("/products").get(getAllProducts);

module.exports = router;