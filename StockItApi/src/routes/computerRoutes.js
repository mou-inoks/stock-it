const express = require('express');
const productController = require('../controller/deviceController');

const router = express.Router();

router.get('/', productController.getAllProducts);
// Ajoute d'autres routes ici...

module.exports = router;