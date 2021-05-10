const dotenv = require('dotenv');

dotenv.config()

const version = process.env.VERSION;
let mongoUrl = '';

if(version == 'development'){
    mongoUrl = 'mongodb://localhost:27017/dev-todo-tasks'
}
else if(version == 'production'){
    mongoUrl = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.u75bl.mongodb.net/todo-task?retryWrites=true&w=majority`
}

module.exports = {
    PORT: process.env.PORT || 8080,
    MONGO_URL: mongoUrl,
}