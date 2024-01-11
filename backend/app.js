var createError = require('http-errors');
var express = require('express');

var cookieParser = require('cookie-parser');
var logger = require('morgan');
var path = require('path');
var indexRouter = require('./routes/index');
var adminRouter = require('./routes/admin');
const db = require('./config/dbConnection');


var app = express();
 
var cors = require('cors')

app.use(cors()) // Use this after the variable declaration 


app.use(logger('dev'));
app.use(express.json());

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


db.connect()
app.use('/api/', indexRouter);
app.use('/api/admin/', adminRouter);


// catch 404 and forward to error handler

// error handler


module.exports = app;
