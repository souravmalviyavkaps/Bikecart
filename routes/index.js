const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const homeController = require('../controllers/home_controller');


router.get("/", homeController.home);

module.exports = router;