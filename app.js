var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var quoteRouter = require('./routes/quote');

var fs = require("fs")

var app = express();

fs.readdirSync("./public/quotes").forEach(file => {
    try {
        var content = JSON.parse(fs.readFileSync("./public/quotes/" + file))
        app.locals[content.name] = content.quotes
    } catch (err) {
        console.log(err)
    }
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/quote', quoteRouter);

module.exports = app;
