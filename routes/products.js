const express = require("express");
const router = express.Router();

const [getAllProducts,getAllProductsTesting] = require("../controller/products")

router.route("/products").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);

module.exports = router;