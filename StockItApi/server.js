const mysql = require('mysql2');
const config = require('./src/config/index');
const app = require('./app');
const sequelize = require('./src/config/database');

const connection = mysql.createConnection({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME
});


sequelize.authenticate()
    .then(() => {
        console.log('Connection to MySQL established successfully.');
        app.listen(process.env.PORT || 3000, () => {
            console.log('Server is running on port', process.env.PORT || 3000);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
