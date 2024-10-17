const config = {
    development: {
        username: 'root',
        password: null,
        database: 'stockit_dev',
        host: '127.0.0.1',
        dialect: 'mysql'
    },
    test: {
        username: 'root',
        password: null,
        database: 'stockit_test',
        host: '127.0.0.1',
        dialect: 'mysql'
    },
    production: {
        username: 'root',
        password: null,
        database: 'stockit',
        host: '127.0.0.1',
        dialect: 'mysql'
    }
};

export default config;