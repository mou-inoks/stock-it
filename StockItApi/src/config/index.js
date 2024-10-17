import dotenv from 'dotenv';
dotenv.config();
import config from './config.js';

const env = process.env.NODE_ENV || 'development';
const envConfig = config[env];

export const DB_HOST = envConfig.host;
export const DB_USER = envConfig.username;
export const DB_PASSWORD = envConfig.password;
export const DB_NAME = envConfig.database;
export const DB_DIALECT = envConfig.dialect;

export default {
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
    DB_DIALECT
};