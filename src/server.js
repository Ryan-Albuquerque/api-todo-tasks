const express = require('express');
const cors = require('cors');
const config = require('../src/config/index')
const db = require('../src/db/index');
const routes = require('./routes/routes');

db.init();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.listen(config.PORT, ()=>{
    console.log(`API is running on port ${config.PORT}`);
})