import express from 'express';
import { 
    getAllLoans, 
    getLoanById, 
    deleteLoanById, 
    editLoanById 
} from '../controller/loanController.js';

const router = express.Router();

// Define your routes here
router.get('/', getAllLoans);
router.get('/:id', getLoanById);
router.delete('/:id', deleteLoanById);
router.put('/:id', editLoanById);

export default router;