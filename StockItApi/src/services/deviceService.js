const Device = require('../models/deviceDao');

exports.getAllDevices = async () => {
    try {
        const device = await Device.find();
        return device; 
    } catch (error) {
        console.error('Error fetching device:', error);
        throw new Error('Could not fetch device'); 
    }
};