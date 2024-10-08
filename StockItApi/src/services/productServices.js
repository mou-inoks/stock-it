const Product = require('../models/productModel');

exports.getAllProducts = async () => {
    return await Product.find();
};