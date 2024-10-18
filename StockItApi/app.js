import express from 'express';
import computerRoutes from './src/routes/computerRoutes.js';
import deviceRoutes from './src/routes/deviceRoutes.js';
import userRoutes from './src/routes/userRoutes.js';
import loanRoutes from './src/routes/loanRoutes.js';

const app = express();

// Middleware
app.use(express.json());
app.use('/api/computer', computerRoutes);
app.use('/api/device', deviceRoutes)
app.use('/api/loan', loanRoutes)
app.use('/api/user', userRoutes)

export default app;