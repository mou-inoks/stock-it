import { getAllComputersQuery, getComputerByIdQuery, deleteComputerByIdCommand, editComputerByIdCommand } from '../services/computerService.js';

export const getAllComputers = async (req, res) => {
    try {
        const computers = await getAllComputersQuery();
        res.json(computers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getComputerById = async (req, res) => {
    try {
        const { id } = req.params;
        const computer = await getComputerByIdQuery(id);

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

        await deleteComputerByIdCommand(id);
        res.status(204).end();

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const editComputerById = async (req, res) => {
    try {
        const { id } = req.params;
        const { body } = req;

        const computer = await editComputerByIdCommand(id, body);
        res.json(computer);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};