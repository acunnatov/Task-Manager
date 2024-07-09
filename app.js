import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import tasksRouter from './routes/taskRoutes.js';
import cors from 'cors'; 
import helmet from 'helmet';
import createProxyMiddleware from 'http-proxy-middleware'
dotenv.config();

const app = express();

app.use(express.json());
app.use('/api', tasksRouter);
app.use('/api', createProxyMiddleware({ 
  target: 'https://backend-task-manager-d780107752ab.herokuapp.com',
  changeOrigin: true,
  secure: false,
}));
app.use(cors());
app.use(helmet())
connectDB();

export default app;
