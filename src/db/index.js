const mongoose = require('mongoose');
const config = require('../config');

module.exports = {
    init(){
        mongoose.connect(config.MONGO_URL, {
            useUnifiedTopology:true,
            useCreateIndex:true,
            useFindAndModify:false,
            useNewUrlParser:true
        })
        .then(()=>{
            console.log('DB connection stablished');
        })
        .catch((err)=>{
            console.log(err)
            process.exit()
        })
    }
}