import dotenv from 'dotenv';
dotenv.config();
import app from './app.js';
import './src/config/syncDatabase.js';

const port = process.env.PORT || 7002;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});