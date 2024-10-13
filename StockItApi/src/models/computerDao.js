const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

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

module.exports = Computer;
