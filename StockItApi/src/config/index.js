//configuration de l'application
require('dotenv').config();
const sequelize = require('./src/config/database');

module.exports = {
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || '',
    DB_NAME: process.env.DB_NAME || 'stockit',
    DB_DIALECT: 'mysql'
};

// Synchroniser la base de données
sequelize.sync({ force: false })  // force: true recrée les tables à chaque démarrage
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch(err => {
        console.error('Error creating database:', err);
    });