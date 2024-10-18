import { 
    getAllDevicesQuery, 
    getDeviceByIdQuery, 
    deleteDeviceByIdCommand, 
    editDeviceByIdCommand 
} from '../services/deviceService.js';

export const getAllDevices = async (req, res) => {
    try {
        const devices = await getAllDevicesQuery();
        res.json(devices);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getDeviceById = async (req, res) => {
    try {
        const { id } = req.params;
        const device = await getDeviceByIdQuery(id);

        if (!device) {
            return res.status(404).json({ message: 'Device not found' });
        }

        res.json(device);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const deleteDeviceById = async (req, res) => {
    try {
        const { id } = req.params;

        await deleteDeviceByIdCommand(id);
        res.status(204).end();

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const editDeviceById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const updatedDevice = await editDeviceByIdCommand(id, updatedData);

        if (!updatedDevice) {
            return res.status(404).json({ message: 'Device not found' });
        }

        res.json(updatedDevice);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export default {
    getAllDevices,
    getDeviceById,
    deleteDeviceById,
    editDeviceById
};