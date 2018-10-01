var todo = require('../model/todoModel');
module.exports = function(app) {
    app.get('/api/seedDatabase', function(req, res) {
        var seedData = [{
                task: "Lightbox",
                isCompleted: false,
                userName: "developer 1"
            },
            {
                task: "Kitchen Sink",
                isCompleted: false,
                userName: "Developer 1"
            },
            {
                task: "node to-do",
                isCompleted: false,
                userName: "Developer 1"
            }
        ];
        todo.create(seedData, function(err, msg) {
            res.send(msg);
        })
    });
};