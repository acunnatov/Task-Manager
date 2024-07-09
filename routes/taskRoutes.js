import express from 'express';
import { addTask, updateTask, deleteTask, getTask } from '../controllers/taskController.js';

const router = express.Router();

router.post('/addTask', addTask);
router.put('/updateTask/:id', updateTask);
router.delete('/deleteTask/:id', deleteTask);
router.get('/tasks', getTask); 

export default router;
