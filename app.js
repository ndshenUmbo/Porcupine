// A Restful API server created for PTTnetwork project

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes/index');
var cors =require('cors')

// Connect to Database
mongoose.connect('mongodb://rootNinja:swordtight@127.0.0.1:27020/test_711?authSource=admin', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

app.use(cors())

//Router
app.use('/',routes);

app.listen(3000);
console.log("app running on port 3000");