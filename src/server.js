const express = require('express');
const config = require('../src/config/index')
const db = require('../src/db/index');
const routes = require('./routes/task_routes');
const errorHandler = require('./middlewares/errorHandler.js');

db.init();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);
app.use(errorHandler);

app.listen(config.PORT, ()=>{
    console.log(`API is running on port ${config.PORT}`);
})