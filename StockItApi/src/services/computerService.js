import Computer from '../models/computerDao.js';

export const getAllComputers = async () => {
    try {
        const computers = await Computer.find();  
        return computers;
    } catch (error) {
        console.error('Error fetching computers:', error);
        throw new Error('Could not fetch computers');
    }
};

export const getComputerById = async (id) => {
    try {
        const computer = await Computer.findById(id); 
        return computer;
    } catch (error) {
        console.error(`Error fetching computer with id ${id}:`, error);
        throw new Error('Could not fetch computer');
    }
};

export const deleteComputerById = async (id) => {
    try {
        const computer = await Computer.findByIdAndDelete(id); 
        return computer;
    } catch (error) {
        console.error(`Error deleting computer with id ${id}:`, error);
        throw new Error('Could not delete computer');
    }
};

export const editComputerById = async (id, computerDto) => {
    try {
        const computer = await Computer.findByIdAndUpdate(id, computerDto, { new: true });
        return computer;
    } catch (error) {
        console.error(`Error updating computer with id ${id}:`, error);
        throw new Error('Could not update computer');
    }
};

export const createComputer = async (computerDto) => {
    try {
        const computer = new Computer(computerDto); 
        await computer.save();
        return computer;
    } catch (error) {
        console.error('Error creating computer:', error);
        throw new Error('Could not create computer');
    }
};
