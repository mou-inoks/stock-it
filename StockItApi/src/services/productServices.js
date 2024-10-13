const Product = require('../models/computerDao');

exports.getAllProducts = async () => {
    return await Product.find();
};