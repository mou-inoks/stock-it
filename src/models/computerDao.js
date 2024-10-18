import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Computer = sequelize.define('Computer', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'disponible' // disponible ou emprunté
    }
});

export default Computer;