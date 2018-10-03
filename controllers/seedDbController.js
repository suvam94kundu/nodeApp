var todo = require('../model/todoModel');
module.exports = function(app) {
    app.get('/seedDatabase', function(req, res) {
        console.log("request" + req);
        var seedData = [{
                task: "Lightbox",
                isCompleted: false,
                userName: "developer1"
            },
            {
                task: "Kitchen Sink",
                isCompleted: false,
                userName: "Developer5"
            },
            {
                task: "node to-do",
                isCompleted: false,
                userName: "Developer81"
            }
        ];
        todo.create(seedData, function(err, msg) {
            res.send(msg);
        });
    });
    app.get('/ab', function(req, res) {
        res.send("done");
    });
};