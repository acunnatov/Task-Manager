import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import tasksRouter from './routes/taskRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/api', tasksRouter);

connectDB();

export default app;
