const Computer = require('../models/computerDao');
const { ComputerStatusEnum } = require('../enum/enums');
const computerService = require('../services/computerService');


export const getAllComputers = async (req, res) => {
    try {
        const computers = await deviceService.getAllComputers();
        res.json(computers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getDeviceById = async (req, res) => {
    try {
        const { id } = req.params;
        const computer = await deviceService.getDeviceById(id);

        if (!computer) {
            return res.status(404).json({ message: 'Device not found' });
        }

        res.json(computer);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const deleteDeviceById = async (req, res) => {
    try {
        const { id } = req.params;

        await deviceService.deleteDeviceById(id);
        res.status(204).end();

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const editDeviceById = async (req, res) => {
    try {
        const { id } = req.params;
        const { body } = req;

        const computer = await deviceService.editDeviceById(id, body);

        res.json(computer);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const createDevice = async (req, res) => {
    try {
        const { body } = req;

        const computer = await deviceService.createDevice(body);

        res.status(201).json(computer);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
