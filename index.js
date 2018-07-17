// import the packages
var express = require('express'),
    bodyParser = require('body-parser'),
    // morgan = require('morgan');
    cors = require('cors');

var app = express();
// app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());

// Database setup
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/chat', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to database");
    }
});

// Importing routes
var routes = require('./routes.js');

// REGISTER OUR ROUTES
app.use('/', routes);

// Set up port
var port = 4000;
app.listen(port);
console.log('App is running on the port ' + port);

module.exports = app
