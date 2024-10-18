import express from 'express';
import computerRoutes from './src/routes/computerRoutes.js';
import deviceRoutes from './src/routes/deviceRoutes.js';
import computerRoutes from './src/routes/computerRoutes.js';

const app = express();

// Middleware
app.use(express.json());
app.use('/api/computer', computerRoutes);
app.use('/api/device', deviceRoutes)

export default app;