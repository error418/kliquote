var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var quoteRouter = require('./routes/quote');

var fs = require("fs")
var yaml = require('js-yaml');

var app = express();

var quoteDirectory = "./quotes/"

fs.readdirSync(quoteDirectory).forEach(file => {
    try {
        var content = yaml.safeLoad(fs.readFileSync(quoteDirectory + file), 'utf-8')
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
