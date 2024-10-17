import express from 'express';
import computerRoutes from './src/routes/computerRoutes.js';

const app = express();

// Middleware
app.use(express.json());
app.use('/api/computer', computerRoutes);

export default app;