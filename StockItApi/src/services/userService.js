import User from '../models/userDao.js'

export const getAllUsersQuery = async () => {
    try {
        const users = await User.findAll();  // Sequelize method to fetch all users
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error('Could not fetch users');
    }
};

export const getUserByIdQuery = async (id) => {
    try {
        const user = await User.findByPk(id);  // Sequelize method to fetch a user by primary key
        return user;
    } catch (error) {
        console.error(`Error fetching user with id ${id}:`, error);
        throw new Error('Could not fetch user');
    }
};

export const createUserCommand = async (userDto) => {
    try {
        const user = await User.create(userDto);  // Sequelize method to create a user
        return user;
    } catch (error) {
        console.error('Error creating user:', error);
        throw new Error('Could not create user');
    }
};

export const editUserByIdCommand = async (id, userDto) => {
    try {
        const user = await User.update(userDto, { where: { id }, returning: true, plain: true });  // Sequelize method to update a user
        return user[1];  // The updated instance is the second element of the array returned by update
    } catch (error) {
        console.error(`Error updating user with id ${id}:`, error);
        throw new Error('Could not update user');
    }
};

export const deleteUserByIdCommand = async (id) => {
    try {
        const user = await User.destroy({ where: { id } });  // Sequelize method to delete a user
        return user;
    } catch (error) {
        console.error(`Error deleting user with id ${id}:`, error);
        throw new Error('Could not delete user');
    }
};
