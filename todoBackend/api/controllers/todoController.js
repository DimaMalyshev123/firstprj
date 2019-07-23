
const todos = require("../models/todosModel");

const todoController = {

    getToDos(req, res) {

        todos.find().then((todo) => {
            return res.send(todo);
        });     
    },

    deleteToDo(req, res) {
        todos.remove({_id: req.params.id}).then((todo) => {
            //return res.send(todo);
            return res.send("<h2>Record deleted success</h2>");
        });
    },

    deleteCompleted(req, res) {
        todos.remove({completed : true}).then((todo) => {
            return res.send("<h2> Completed todos was deleted</h2>");
        })
    },

    allCompleted(req, res) {
        todos.updateMany({completed : false}, {completed : true}).then((todo) => {
            return res.send("<h2> All todo completed </h2>");
        })
    },


    addToDo(req, res) {
        console.log(req.body);


        // let todo = new todos();
        // todo.title = req.body.todo.title;
        // todo.description = req.body.todo.description;
        // todo.completed = req.body.todo.completed;
        // todo.save().then((todo) => {
        //     console.log(todo);
        // })
    }

}

module.exports = todoController;