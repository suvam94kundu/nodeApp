var express = require('express');
var app = express();
var mongo = require('mongoose');
var config = require('./config/index');
var setUpController = require('./controllers/seedDbController');
var apiController = require("./controllers/apiController");

app.set('view engine', 'ejs');
var port = 9085;
mongo.connect(config.getDbConnections(), { useNewUrlParser: true }).then(
    () => { console.log('connected') },
    err => { console.log(err) }
);
setUpController(app);
apiController(app);
var server = app.listen(port, function(err) {
    var host = server.address().address;
    var port = server.address().port;
    console.log('running ' + host + ' ' + port);
});



// Make a connection to MongoDB Service