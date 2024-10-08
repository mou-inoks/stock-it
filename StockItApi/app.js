const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const config = require('./config');

const app = express();

// Middleware
app.use(express.json());
app.use('/api/products', productRoutes);

module.exports = app;