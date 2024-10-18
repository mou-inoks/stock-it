import {    
    getAllUsersQuery,
    getUserByIdQuery,
    createUserCommand,
    editUserByIdCommand,
    deleteUserByIdCommand
} from '../services/userService.js';

export const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsersQuery();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userService.getUserByIdQuery(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const createUser = async (req, res) => {
    try {
        const { body } = req;
        const user = await userService.createUserCommand(body);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const editUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const user = await userService.editUserByIdCommand(id, body);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const deleteUserById = async (req, res) => {
    try {
        const { id } = req.params;
        await userService.deleteUserByIdCommand(id);
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
