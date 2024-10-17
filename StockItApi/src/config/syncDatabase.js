import sequelize from './database.js';

sequelize.sync({ force: false })  // force: true recrée les tables à chaque démarrage
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch(err => {
        console.error('Error creating database:', err);
    });