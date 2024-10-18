import computerService from '../services/computerService.js';

export const getAllComputers = async (req, res) => {
    try {
        const computers = await computerService.getAllComputers();
        res.json(computers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getComputerById = async (req, res) => {
    try {
        const { id } = req.params;
        const computer = await computerService.getComputerById(id);

        if (!computer) {
            return res.status(404).json({ message: 'Computer not found' });
        }

        res.json(computer);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const deleteComputerById = async (req, res) => {
    try {
        const { id } = req.params;

        await computerService.deleteComputerById(id);
        res.status(204).end();

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const editComputerById = async (req, res) => {
    try {
        const { id } = req.params;
        const { body } = req;

        const computer = await computerService.editComputerById(id, body);

        res.json(computer);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const createComputer = async (req, res) => {
    try {
        const { body } = req;

        const computer = await computerService.createComputer(body);

        res.status(201).json(computer);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
