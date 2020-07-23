// ! EXPRESS MODULE: 
//!=======================================================


var express = require('express');
var app = express();
var path = require('path');
var routeElectronic = require('./app_server/router/ElectronicRouter');


app.use('/public', express.static(path.join(__dirname,'public')))

// ! WEB SERVER BY USING EXPRESS
app.use('/electronic', routeElectronic);

app.listen(8000);
