var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var morgan = require('morgan')
var app = express()
var conf = require('./lib/config')

//middleware
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(morgan('dev'));                                         // log every request to the console
app.use(cors());

app.get('/', function(req, res) {
	res.json({msg: "hello"})
})
app.listen(conf.port);

module.exports = app;