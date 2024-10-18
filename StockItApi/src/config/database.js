import { Sequelize } from 'sequelize';
import { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_DIALECT } from './index.js';

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_DIALECT
});

export default sequelize;