const ProductService = require('../services/productService');

exports.getAllProducts = async (req, res) => {
    try {
        const products = await ProductService.getAllProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};