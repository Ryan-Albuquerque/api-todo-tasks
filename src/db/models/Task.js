const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type:String,
    },
    priority:{
        type: Number,
        default: 1
    },
    author:{
        type: String,
        required: true
    },
    targetDate:{
        type: Date,
        required: true
    },
    done:{
        type: Boolean,
        default: false
    }
})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;