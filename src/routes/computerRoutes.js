import express from 'express';
import { 
    getAllComputers, 
    getComputerById, 
    deleteComputerById, 
    editComputerById 
} from '../controller/computerController.js';

const router = express.Router();

// Define your routes here
router.get('/', getAllComputers);
router.get('/:id', getComputerById);
router.delete('/:id', deleteComputerById);
router.put('/:id', editComputerById);

export default router;