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

exports.getById = async (id) => {
    try {
        const computer = await Computer.findById(id);
        return computer; 
    } catch (error) {
        console.error('Error fetching computer:', error);
        throw new Error('Could not fetch computer'); 
    }
}