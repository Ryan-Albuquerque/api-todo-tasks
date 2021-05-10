const taskService = require('../services/task_service');

let taskController = {};


const _listTask = async (req,res, next) => {
    try {
        const tasks = await taskService.listTasks();

        return res.json({
            tasks
        })
    } catch (error) {
        next(error)
    }
}

const _getTask = async (req,res,next) => {
    try {
        const task = await taskService.getTaskById(req.params.id)

        return res.json({
            task
        })
    } catch (error) {
        next(error)
    }
}

const _createTask = async (req,res,next) => {
    try {
        const create = await taskService.createTask(req.body)

        return res.status(201).json({
            message: 'Criado com sucesso',
            create
        })
    } catch (error) {
        next(error)
    }
}

const _updateTask = async (req,res) => {
    try {
        const updated = await taskService.updateTask(req.params.id, req.body)

        return res.json({
            message: 'Atualizado com sucesso',
            updated
        })
    } catch (error) {
        next(error)
    }
}

const _deleteTask = async (req,res) => {
    try {
        const deleted = await taskService.deleteTask(req.params.id)

        return res.json({
            message: 'Deletado com sucesso',
            deleted
        })
    } catch (error) {
        next(error)
    }
}


taskController.list = _listTask;
taskController.get = _getTask;
taskController.create = _createTask;
taskController.update = _updateTask;
taskController.delete = _deleteTask;


module.exports= taskController;