const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/', productController.getAllProducts);
// Ajoute d'autres routes ici...

module.exports = router;