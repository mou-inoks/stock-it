import express from 'express';
import deviceController from '../controller/deviceController.js';
const router = express.Router();

router.get('/', deviceController.getAllProducts);
// Ajoute d'autres routes ici...

module.exports = router;