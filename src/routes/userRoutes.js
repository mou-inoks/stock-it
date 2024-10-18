import express from 'express';
import { 
    getAllUsers, 
    getUserById, 
    deleteUserById, 
    editUserById 
} from '../controller/userController.js';

const router = express.Router();

// Define your routes here
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.delete('/:id', deleteUserById);
router.put('/:id', editUserById);

export default router;