import Task from '../models/task.js';


export const getTasks = async(req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
}

export const getTask = async(req, res) => {
    
    await Task.findById(req.params.id);
    res.send('Obteniendo tarea')
}

export const createTask = async (req, res) => {
    const { title, description } = req.body;
    const task  = new Task({
        title,
        description
    });
    await task.save();

    res.json({'status': 'Tarea Guardada'});
}

export const updateTasks = async(req, res) => {
    const {title, description} = req.body;
    const newTask = {title, description};
    await Task.findByIdAndUpdate(req.params.id, newTask);

    res.json({'status': 'Tarea Actulizada'});
}

export const deleteTasks = async(req, res) => {
    await Task.findByIdAndRemove(req.params.id);

    res.json({'status': 'Tarea Eliminada'});
}