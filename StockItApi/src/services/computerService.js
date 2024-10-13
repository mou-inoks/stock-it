const Computer = require('../models/computerDao');

exports.getAllComputers = async () => {
    try {
        const computers = await Computer.find();
        return computers; 
    } catch (error) {
        console.error('Error fetching computers:', error);
        throw new Error('Could not fetch computers'); 
    }
};