/**
 * Created by Arun on 18/07/2017.
 */
var express = require('express');
var app = express();

var db = require('./db');

var UserController = require('./project/ProjectController');
app.use('/projects', UserController);

module.exports = app;