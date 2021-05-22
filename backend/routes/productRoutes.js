const express = require("express");
const router = express.Router();

const {
    getAll,
    getProduct,
}= require("../controller/productController");


router.get("/",getAll);

router.get("/:id",getProduct);
 
module.exports = router;
