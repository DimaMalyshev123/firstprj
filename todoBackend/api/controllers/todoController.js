
const Todo = require("../models/todosModel");

const todoController = {

    getToDos(req, res) {

        Todo.find().then((todo) => {
            return res.send(todo);

        });
    },

    deleteToDo(req, res) {
        Todo.remove({ _id: req.params.id }).then((todo) => {
            todoController.getToDos(req, res);
        });
    },

    deleteCompleted(req, res) {
        Todo.remove({ completed: true }).then((todo) => {
            todoController.getToDos(req, res);
        })
    },

    allCompleted(req, res) {
        Todo.updateMany({ completed: false }, { completed: true }).then((todo) => {
            todoController.getToDos(req, res);
        })
    },

    async addToDo(req, res, next) {
        try {
            const todo = new Todo({
                ...req.body
            });
            await todo.save();
            todoController.getToDos(req, res);

        } catch (error) {

            error.msg = "";
            if (error.errors.title) {
                error.msg += "Title is required. Min length 3. ";
            }
            if (error.errors.description) {
                error.msg += "Description is requred. Min length 10.";
            }
            next(error);
        }
    },

    async editToDo(req, res, next) {

        const todo = await Todo.findById(req.body._id);

        todo.title = req.body.title;
        todo.description = req.body.description;
        todo.completed = req.body.completed;

        try {
            await todo.save();
            todoController.getToDos(req, res);
        } catch (error) {

            error.msg = "";
            if (error.errors.title) {
                error.msg += "Title is required. Min length 3. ";
            }
            if (error.errors.description) {
                error.msg += "Description is requred. Min length 10.";
            }
            next(error);
        }
    }
}

module.exports = todoController;