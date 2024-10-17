import dotenv from 'dotenv';
dotenv.config();
import config from './config.js'; 
import sequelize from './database.js';

module.exports = {
    DB_HOST: config.host,
    DB_USER: config.username,
    DB_PASSWORD: config.password,
    DB_NAME: config.database,
    DB_DIALECT: config.dialect
};


sequelize.sync({ force: false })  // force: true recrée les tables à chaque démarrage
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch(err => {
        console.error('Error creating database:', err);
    });