var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var todoSchema = new Schema({
    task: String,
    isCompleted: Boolean,
    userName: String
});

var Todos = mongoose.model('todos', todoSchema);
module.exports = Todos;
