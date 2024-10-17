import Computer from '../models/computerDao';

export const getAllComputers = async () => {
    try {
        const computers = await Device.find();  
        return computers;
    } catch (error) {
        console.error('Error fetching computers:', error);
        throw new Error('Could not fetch computers');
    }
};

export const getDeviceById = async (id) => {
    try {
        const computer = await Device.findById(id); 
        return computer;
    } catch (error) {
        console.error(`Error fetching computer with id ${id}:`, error);
        throw new Error('Could not fetch computer');
    }
};

export const deleteDeviceById = async (id) => {
    try {
        const computer = await Device.findByIdAndDelete(id); 
        return computer;
    } catch (error) {
        console.error(`Error deleting computer with id ${id}:`, error);
        throw new Error('Could not delete computer');
    }
};

export const editDeviceById = async (id, deviceDto) => {
    try {
        const computer = await Device.findByIdAndUpdate(id, deviceDto, { new: true });
        return computer;
    } catch (error) {
        console.error(`Error updating computer with id ${id}:`, error);
        throw new Error('Could not update computer');
    }
};

export const createDevice = async (deviceDto) => {
    try {
        const computer = new Device(deviceDto); 
        await computer.save();
        return computer;
    } catch (error) {
        console.error('Error creating computer:', error);
        throw new Error('Could not create computer');
    }
};
