var createError = require('http-errors');
var express = require('express');

var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const db = require('./config/dbConnection');


var app = express();
 



app.use(logger('dev'));
app.use(express.json());

app.use(cookieParser());

db.connect()
app.use('/', indexRouter);


// catch 404 and forward to error handler

// error handler


module.exports = app;
