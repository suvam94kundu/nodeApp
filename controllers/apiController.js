var todosModel = require('../model/todoModel');
var bodyParser = require('body-parser');
module.exports = function(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/findTodo/:username', function(req, res) {
        todosModel.find({ userName: req.params.username }, function(err, todos) {
            if (err) throw err;
            res.send(todos);
        })
    });
    app.get('/api/findTodoById/:id', function(req, res) {
        todosModel.findById({ _id: req.params.id }, function(err, todos) {
            if (err) throw err;
            res.send(todos);
        })
    });

    app.post("/api/alterTodo", function(req, res) {
        if (req.body.id) {
            todosModel.findByIdAndUpdate(req.body.id, {
                task: req.body.task,
                isCompleted: req.body.isCompleted,
                userName: req.body.userName
            }, function(err, msg) {
                if (err) throw err;
                res.send("updated successfully");
            });
        } else {
            var newTodo = todosModel({
                task: req.body.task,
                isCompleted: req.body.isCompleted,
                userName: req.body.userName
            });
            newTodo.save(function(err, msg) {
                if (err) throw err;
                res.send("Saved successfully");
            })
        }
    });

    app.delete("/api/deleteTodo", function(req, res) {
        todosModel.findByIdAndRemove(req.body.id, function(err) {
            if (err) throw err;
            res.send("todo deleted");
        })
    })
}