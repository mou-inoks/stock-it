const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./src/routes/computerRoutes');
const config = require('./src/config/index');

const app = express();

// Middleware
app.use(express.json());
app.use('/api/products', productRoutes);

module.exports = app;