const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Computer = require('./Computer');
const Device = require('./Device');

const Loan = sequelize.define('Loan', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    loanDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    returnDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    loanType: {
        type: DataTypes.ENUM('computer', 'device'),
        allowNull: false
    },
    equipmentId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

// Associations
User.hasMany(Loan, { foreignKey: 'userId' });
Loan.belongsTo(User, { foreignKey: 'userId' });

Computer.hasMany(Loan, { foreignKey: 'equipmentId', constraints: false, scope: { loanType: 'computer' } });
Loan.belongsTo(Computer, { foreignKey: 'equipmentId', constraints: false });

Device.hasMany(Loan, { foreignKey: 'equipmentId', constraints: false, scope: { loanType: 'device' } });
Loan.belongsTo(Device, { foreignKey: 'equipmentId', constraints: false });

module.exports = Loan;
