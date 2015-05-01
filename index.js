var express = require('express');
var app = express();
var path = require('path');
var mu = require('mu2');
var util = require('util');
var Random = require("random-js");
var random = new Random(Random.engines.mt19937().autoSeed());

app.use('/style', express.static(__dirname + '/html/style'));
app.use('/script', express.static(__dirname + '/html/script'));
app.use('/resource', express.static(__dirname + '/html/resource'));

mu.root = __dirname + '/templates';

var numbers = [];

app.get('/', function (req, res) 
{
    //res.sendFile(__dirname + '/index.html');
    
    var stream = mu.compileAndRender('index.html', numbers);
    stream.pipe(res);
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
    }
}, 10);