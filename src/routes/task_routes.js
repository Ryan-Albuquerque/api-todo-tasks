const express = require('express');

const routes = express.Router();

routes.get('/tasks', taskController.list);
routes.get('/task/:id', taskValidator.get, taskController.get);
routes.post('/task', taskValidator.create, taskController.create);
routes.patch('/task/:id', taskValidator.update, taskController.update);
routes.delete('/task/:id', taskValidator.delete, taskController.delete);

module.exports = routes;