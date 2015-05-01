var express = require('express');
var app = express();
var path = require('path');
var mu = require('mu2');
var util = require('util');

app.use('/style', express.static(__dirname + '/html/style'));
app.use('/script', express.static(__dirname + '/html/script'));
app.use('/resource', express.static(__dirname + '/html/resource'));

mu.root = __dirname + '/templates';

app.get('/', function (req, res) 
{
    //res.sendFile(__dirname + '/index.html');
    
    var stream = mu.compileAndRender('index.html', {name: "john"});
    stream.pipe(res);
});

var server = app.listen(3300, function () 
{
    console.log('App initialized');
});