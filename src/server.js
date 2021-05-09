const express = require('express');
const config = require('../src/config/index')

const app = express();

app.listen(config.PORT, ()=>{
    console.log(`API is running on port ${config.PORT}`);
})