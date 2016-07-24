/**
 * Created by sagakulk on 7/24/2016.
 */

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var notesController = require('./controller/notesController');

mongoose.connect( 'mongodb://dev:password@ds029745.mlab.com:29745/notesdb');

//mongoose.connect( 'mongodb://@localhost:33333/db');

//notesController.create();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:63342');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
})
app.get('/notes', function(req,res){
    notesController.fetchTheResult(req,res);
});

app.post('/createNote', function(req,res){
    notesController.create(req,res);
})
app.listen(3000);










