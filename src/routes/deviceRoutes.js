import express from 'express';
import { 
    getAllDevices, 
    getDeviceById, 
    deleteDeviceById, 
    editDeviceById 
} from '../controller/deviceController.js';

const router = express.Router();

// Define your routes here
router.get('/', getAllDevices);
router.get('/:id', getDeviceById);
router.delete('/:id', deleteDeviceById);
router.put('/:id', editDeviceById);

export default router;