const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    brand: { type: String },
    model: { type: String },
    quantity: { type: Number, required: true },
});

module.exports = mongoose.model('Product', productSchema);