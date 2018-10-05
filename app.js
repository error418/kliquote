var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var quoteRouter = require('./routes/quote');

var glob = require("glob")
var path = require("path")
var yaml = require('js-yaml');
var fs = require("fs")

var app = express();

var quoteGlob = "data/quotes/*.yml"

glob.sync(quoteGlob)
    .forEach(file => {
        var filename = path.basename(file, path.extname(file))
        try {
            var content = yaml.safeLoad(fs.readFileSync(file), 'utf-8')
            app.locals[filename] = content

            console.log("loaded " + filename)
        } catch (err) {
            console.log(err)
        }
    })

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/quote', quoteRouter);

module.exports = app;
