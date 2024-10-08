const app = require('./app');
const config = require('./config');

const PORT = process.env.PORT || 3000;

mongoose.connect(config.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => console.error('Could not connect to MongoDB...', err));