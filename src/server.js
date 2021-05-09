const express = require('express');
const config = require('../src/config/index')
const db = require('../src/db/index');

db.init();

const app = express();

app.listen(config.PORT, ()=>{
    console.log(`API is running on port ${config.PORT}`);
})