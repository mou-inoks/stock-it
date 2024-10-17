import Loan from '../models/loanDao.js'

export const getAllLoans = async () => {
    try {
        const loans = await Loan.findAll();  // Sequelize method to fetch all loans
        return loans;
    } catch (error) {
        console.error('Error fetching loans:', error);
        throw new Error('Could not fetch loans');
    }
};

export const getLoanById = async (id) => {
    try {
        const loan = await Loan.findByPk(id);  // Sequelize method to fetch a loan by primary key
        return loan;
    } catch (error) {
        console.error(`Error fetching loan with id ${id}:`, error);
        throw new Error('Could not fetch loan');
    }
};

export const createLoan = async (loanDto) => {
    try {
        const loan = await Loan.create(loanDto);  // Sequelize method to create a loan
        return loan;
    } catch (error) {
        console.error('Error creating loan:', error);
        throw new Error('Could not create loan');
    }
};

export const editLoanById = async (id, loanDto) => {
    try {
        const loan = await Loan.update(loanDto, { where: { id }, returning: true, plain: true });  // Sequelize method to update a loan
        return loan[1];  // The updated instance is the second element of the array returned by update
    } catch (error) {
        console.error(`Error updating loan with id ${id}:`, error);
        throw new Error('Could not update loan');
    }
};

export const deleteLoanById = async (id) => {
    try {
        const loan = await Loan.destroy({ where: { id } });  // Sequelize method to delete a loan
        return loan;
    } catch (error) {
        console.error(`Error deleting loan with id ${id}:`, error);
        throw new Error('Could not delete loan');
    }
};
