import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './userDao.js'
import Computer from './computerDao.js'
import Device from './deviceDao.js'

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

export default Loan;