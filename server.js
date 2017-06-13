var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var morgan = require('morgan')
var app = express()
var conf = require('./lib/config')();

//middleware
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(morgan('dev'));                                         // log every request to the console
app.use(cors());

//router
require('./lib/router')(app)

app.use(express.static('public')) // Serve static folder
app.listen(conf.port, function() {
	console.log('Running server on port='+conf.port);
});

module.exports = app;