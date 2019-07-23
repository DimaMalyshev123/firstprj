var mongoose = require("mongoose");

var todosSchema = mongoose.Schema({
    id: String,
    title: String,
    description : String,
    completed: Boolean
});

const TodoModel = mongoose.model("todos", todosSchema);

module.exports = TodoModel;