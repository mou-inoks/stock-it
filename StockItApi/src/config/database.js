import { Sequelize } from 'sequelize';
import { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_DIALECT } from './index.js';

console.log('Database Configuration:', { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_DIALECT });

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_DIALECT
});

export default sequelize;