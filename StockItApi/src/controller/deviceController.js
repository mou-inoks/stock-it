const deviceService = require('../services/deviceService');

exports.getALlDevices = async (req, res) => {
    try {
        const devices = await deviceService.getAllDevices();
        res.json(devices);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getDeviceById = async (req, res) => {
    try {
        const { id } = req.params;
        const device = await AppService.getProductById(id);

        if (!device) {
            return res.status(404).json({ message: 'Device not found' });
        }

        res.json(device);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}