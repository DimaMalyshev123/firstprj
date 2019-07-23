const express = require("express");
var controllerToDo = require("../controllers/todoController");

const toDoRouter = express.Router();

toDoRouter.get('/all',controllerToDo.getToDos);

toDoRouter.delete('/delete/:id',controllerToDo.deleteToDo);

toDoRouter.delete('/delete/completed/true', controllerToDo.deleteCompleted);

toDoRouter.put('/allCompleted', controllerToDo.allCompleted);

toDoRouter.post('/addToDo', controllerToDo.addToDo);



module.exports = toDoRouter; 


