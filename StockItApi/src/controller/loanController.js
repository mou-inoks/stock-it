const Loan = require('../models/Loan');
const User = require('../models/User');
const Computer = require('../models/Computer');
const Device = require('../models/Device');

exports.createComputerLoan = async (req, res) => {
    try {
        const { userId, computerId } = req.body;

        const user = await User.findByPk(userId);
        const computer = await Computer.findByPk(computerId);

        if (!user || !computer) {
            return res.status(404).json({ message: 'User or Computer not found' });
        }

        const loan = await Loan.create({
            loanDate: new Date(),
            userId: user.id,
            equipmentId: computer.id,
            loanType: 'computer'
        });

        await computer.update({ status: 'borrowed' });

        return res.status(201).json({ message: 'Loan created successfully', loan });
    } catch (error) {
        console.error('Error creating loan:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.createDeviceLoan = async (req, res) => {
    try {
        const { userId, deviceId } = req.body;

        const user = await User.findByPk(userId);
        const device = await Device.findByPk(deviceId);

        if (!user || !device) {
            return res.status(404).json({ message: 'User or Device not found' });
        }

        const loan = await Loan.create({
            loanDate: new Date(),
            userId: user.id,
            equipmentId: device.id,
            loanType: 'device'
        });

        await device.update({ status: 'borrowed' });

        return res.status(201).json({ message: 'Loan created successfully', loan });
    } catch (error) {
        console.error('Error creating loan:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.updateDeviceLoan = async (req, res) => {
    try {
        const { loanId, returnDate } = req.body;

        const loan = await Loan.findByPk(loanId);

        if(!loan) 
            return res.status(404).json({ message: 'Loan not found' });

        if(loan.loanType === 'computer') {
            const computer = await Computer.findByPk(loan.equipmentId);
            if(computer) {
                await computer.update({ status: 'available' });
            }
        } 
        else if (loan.loanType === 'device') {
            const device = await Device.findByPk(loan.equipmentId);
            if (device) {
                await device.update({ status: 'available' });
            }
        }
        await loan.update({ returnDate });

        return res.status(200).json({ message: 'Loan returned successfully', loan });

    } catch (error) {
        console.error('Error returning loan:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}