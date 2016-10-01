/*jslint node: true */
'use strict';

var express = require('express');
var fs = require('fs');
var engines = require('consolidate'); // for template management
var api = require('./config.js');

var app = express();
app.use(express.static( __dirname ));

// from http://stackoverflow.com/a/16111469
app.set('views', __dirname + '/app');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

require('./routes')(app);

var port = process.env.PORT || 5000;

app.listen(port, function() {
    console.log("Development server started on port " + port + ".");
});
