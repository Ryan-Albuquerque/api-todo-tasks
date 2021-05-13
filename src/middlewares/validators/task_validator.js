const taskService = require('../../services/task_service');
const utils = require('../../utils/index');
const moment = require('moment');

let taskValidator = {};

const _getTask = async (req, res, next) =>{

    const {id} = req.params;

    if(!id){
        return res.status(400).json({
            message: 'Id não informado'
        })
    }

    if(!taskService.isValidObjectId(id)){
        return res.status(400).json({
            message: "Id não é válido"
        })
    }

    if(!await taskService.getTaskById(id)){
        return res.status(400).json({
            message: "Atividade não existe no banco de dados"
        })
    }

    next();
}

const _createTask = (req,res,next) => {
    const {title, description, priority, author, targetDate, done} = req.body;

    if(!title){
        return res.status(400).json({
            message: "Título não informado"
        })
    }

    if(title.length < 3){
        return res.status(400).json({
            message: "Título deve ter mais que 3 caracteres"
        })
    }

    if(description && description.length < 5){
        return res.status(400).json({
            message: "Descrição deve ter mais que 5 caracteres"
        })
    }

    if(!priority){
        return res.status(400).json({
            message: "Prioridade não informado"
        })
    }

    if(!utils.priority[priority]){
        return res.status(400).json({
            message: "Prioridade fora do padrão"
        })
    }

    if(!author){
        return res.status(400).json({
            message: "Autor não informado"
        })
    }

    if(!targetDate){
        return res.status(400).json({
            message: "Data de entrega não informado"
        })
    }

    
    if( typeof  moment(targetDate).date() !== 'number' ||  moment(targetDate).month() !== 'number' ||  moment(targetDate).year() !== 'number'){
        return res.status(400).json({
            message: "Data de entrega não é válida"
        })
    }

    if(typeof done !== 'boolean'){
        return res.status(400).json({
            message: "Status não é válido"
        })
    }

    next()
}

const _updateTask = async (req,res,next) =>{
    const {title, description, priority, targetDate, done} = req.body;
    const {id} = req.params;

    if(!id){
        return res.status(400).json({
            message: 'Id não informado'
        })
    }

    if(!taskService.isValidObjectId(id)){
        return res.status(400).json({
            message: "Id não é válido"
        })
    }

    if(!await taskService.getTaskById(id)){
        return res.status(400).json({
            message: "Atividade não existe no banco de dados"
        })
    }

    if(title && title.length < 3){
        return res.status(400).json({
            message: "Título deve ter mais que 3 caracteres"
        })
    }

    if(description && description.length < 5){
        return res.status(400).json({
            message: "Descrição deve ter mais que 5 caracteres"
        })
    }

    if(priority && !utils.priority[priority]){
        return res.status(400).json({
            message: "Prioridade não informado"
        })
    }


    if( typeof  moment(targetDate).date() !== 'number' ||  moment(targetDate).month() !== 'number' ||  moment(targetDate).year() !== 'number'){
        return res.status(400).json({
            message: "Data de entrega não é válida"
        })
    }


    if(done && typeof done !== 'boolean'){
        return res.status(400).json({
            message: "Status não é válido"
        })
    }

    next()
}

const _deleteTask = async (req,res,next) =>{
    const {id} = req.params;
    
    if(!id){
        return res.status(400).json({
            message: 'Id não informado'
        })
    }

    if(!taskService.isValidObjectId(id)){
        return res.status(400).json({
            message: "Id não é válido"
        })
    }

    if(!await taskService.getTaskById(id)){
        return res.status(400).json({
            message: "Atividade não existe no banco de dados"
        })
    }

    next()
}


taskValidator.get = _getTask;
taskValidator.create = _createTask;
taskValidator.update = _updateTask;
taskValidator.delete = _deleteTask;

module.exports = taskValidator;