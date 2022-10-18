import {Router} from 'express';
import {
    getTasks,
    getTask,
    createTask,
    deleteTasks,
    updateTasks
} from '../controllers/task.controllers.js';


const router = Router();

router.get('/tasks', getTasks);

router.get('/task/:id', getTask);

router.post('/tasks', createTask);

router.put('/task/:id', updateTasks);

router.delete('/task/:id', deleteTasks);

export default router;