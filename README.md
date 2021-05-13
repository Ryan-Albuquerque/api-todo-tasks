# api-todo-tasks
API to managing todo tasks

Stack/Technology: Node.js, MongoDB, Mongoose, Moment, Express, Cors, Dotenv;

Public URL: 'https://api-todo-task.herokuapp.com'

ROUTES:

    LIST:{
      url: '/tasks',
      method: GET
    }

    GET:{
      url: '/task/:id',
      method: GET
    }

    CREATE:{
      url: '/task',
      method: POST,
      body:{
        "title":{
            type: String,
            required: true
        },
        "description":{
            type:String,
        },
        "priority":{
            type: Number,
            default: 1
        },
        "author":{
            type: String,
            required: true
        },
        "targetDate":{
            type: Date,
            required: true
        },
        "done":{
            type: Boolean,
            default: false
        }
      }
    }


    UPDATE:{
      url:'/task/:id',
      method: PATCH
    }


    DELETE:{
      url:'/task/:id',
      method: DELETE
    }
