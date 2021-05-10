const express = require('express');
const taskRouter = require('./task_routes');
const errorHandler = require('../middlewares/errorHandler');

const routes = express.Router();

//welcome route
routes.get('/', (req,res)=>{
    return res.json({
        message: "I'm running :)"
    })
})

//system routes
routes.use(taskRouter);

//error handler routes
routes.use(errorHandler);

module.exports = routes;