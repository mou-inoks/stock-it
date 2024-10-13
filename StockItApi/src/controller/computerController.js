const Computer = require('../models/computerDao');
const { ComputerStatusEnum } = require('../enum/enums');

exports.createComputer = async (req, res) => {
    try {
        const { name, status } = req.body;

        if (!name || !status) {
            return res.status(400).json({ message: 'Name and status are required' });
        }

        //verif status valide 
        const validStatus = Object.values(ComputerStatusEnum);
        if (!validStatus.includes(status)) {
            return res.status(400).json({ message: 'Invalid status' });
        }

        const computer = await Computer.create({ name, status });
        return res.status(201).json({ message: 'Computer created successfully', computer });
    } catch (error) {
        console.error('Error creating computer:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}