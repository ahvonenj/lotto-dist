var express = require('express');
var app = express();
var path = require('path');
var Handlebars = require('handlebars');
var util = require('util');
var engines = require('consolidate')
var Random = require("random-js");
var random = new Random(Random.engines.mt19937().autoSeed());

/*app.use('/style', express.static(__dirname + '/html/style'));
app.use('/script', express.static(__dirname + '/html/script'));
app.use('/resource', express.static(__dirname + '/html/resource'));*/

app.engine('.html', engines.handlebars);
app.set('views', __dirname + '/templates');

var numbers = [];
//var template = Handlebars.compile(__dirname + '/templates/index.html');

app.get('/', function (req, res) 
{
    //res.sendFile(__dirname + '/index.html');
    
    //var stream = template({ numbers: numbers });
    res.render('index.html', { numbers: numbers });
});

var server = app.listen(3300, function () 
{
    console.log('App initialized');
});

var numberInterval = setInterval(function()
{
    var value = random.integer(1, 39);
    
    if(typeof numbers[value] !== 'undefined')
    {
        numbers[value]++;
    }
    else
    {
        numbers.push(value);
        numbers[value] = 0;
    }
}, 10);