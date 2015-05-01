var express = require('express');
var app = express();
var path = require('path');
var mu = require('mu2');

app.use('/style', express.static(__dirname + '/html/style'));
app.use('/script', express.static(__dirname + '/html/script'));
app.use('/resource', express.static(__dirname + '/html/resource'));

mu.root = __dirname + '/templates';

app.get('/', function (req, res) 
{
    //res.sendFile(__dirname + '/index.html');
    
    
    var f = mu.render('index.html', {name: "john"});
    res.send(f);
});

var server = app.listen(3300, function () 
{
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});