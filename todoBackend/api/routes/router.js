const express = require('express');
// const { getToDos, deleteToDo, deleteCompleted, allCompleted, editToDo } = require('../controllers/todoController');
const controllerToDo = require('../controllers/todoController');
const toDoRouter = express.Router();

toDoRouter.get('/todo', controllerToDo.getToDos);

toDoRouter.delete('/delete/:id', controllerToDo.deleteToDo);

toDoRouter.delete('/delete/completed/true', controllerToDo.deleteCompleted);

toDoRouter.put('/todo/completed', controllerToDo.allCompleted);

toDoRouter.post('/todo/add', controllerToDo.addToDo);

toDoRouter.post('/todo/edit', controllerToDo.editToDo);




module.exports = toDoRouter;


