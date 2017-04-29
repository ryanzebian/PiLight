var express = require('express');
var LED = require('./light.js');
var app = express();
var turnOn = 1;
app.use('/',express.static('src'));

app.get('/light/toggle', function(req,res){
    console.log('user requested light toggle');
    LED.on(turnOn);
    turnOn = turnOn ^ 1;
    res.sendStatus(200);
});
app.listen(8080);
console.log('Listening on port 8080');
