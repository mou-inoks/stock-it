import {
    getAllLoansQuery,
    getLoanByIdQuery,
    createLoanCommand,
    editLoanByIdCommand,
    deleteLoanByIdCommand
} from '../services/loanService.js'

export const getAllLoans = async (req, res) => {
    try {
        const loans = await loanService.getAllLoansQuery();
        res.json(loans);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getLoanById = async (req, res) => {
    try {
        const { id } = req.params;
        const loan = await loanService.getLoanByIdQuery(id);

        if (!loan) {
            return res.status(404).json({ message: 'Loan not found' });
        }

        res.json(loan);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const createLoan = async (req, res) => {
    try {
        const { body } = req;
        const loan = await loanService.createLoanCommand(body);
        res.status(201).json(loan);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const editLoanById = async (req, res) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const loan = await loanService.editLoanByIdCommand(id, body);

        if (!loan) {
            return res.status(404).json({ message: 'Loan not found' });
        }

        res.json(loan);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const deleteLoanById = async (req, res) => {
    try {
        const { id } = req.params;
        await loanService.deleteLoanByIdCommand(id);
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


