const mongoose = require('mongoose')
const Task = require('../db/models/Task');

let taskService = {}

const _listTasks = async () => {
    const tasks = await Task.find();
    return tasks;
}

const _createTask = async (task) =>{
    const create = await Task.create(task);
    return create;
}

const _getTaskById = async (id) =>{
    const task = await Task.findOne({_id: id})
    return task
}

const _isValidMongooseId = (id) =>{
    return mongoose.isValidObjectId(id);
}

const _updateTask = async (id, body) =>{
    const updated = await Task.updateOne({_id: id}, body);
    return updated;
}

const _deleteTask = async (id) =>{
    const deleted = await Task.findOneAndDelete({_id: id});
    return deleted;
}

taskService.listTasks = _listTasks;
taskService.createTask = _createTask;
taskService.isValidObjectId = _isValidMongooseId;
taskService.getTaskById = _getTaskById;
taskService.updateTask = _updateTask;
taskService.deleteTask = _deleteTask;

module.exports = taskService;