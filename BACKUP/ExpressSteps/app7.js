// ! EXPRESS MODULE: 
//!=======================================================

// ! PART 1: CREATE SIMPLE HTTP SERVER WITHOUT EXPRESS:

// STEP 1 : DEFINE YOUR CORE MODULES----------------------
var fs  = require('fs');
var path = require('path');

var express = require('express');
var app = express();


// Define your controllers!
var routeElectronic = require('./ElectronicController');

// ! STEP 2: DEFINE PUBLIC FOLDER-------------------------
app.use('/public', express.static(path.join(__dirname,'public')))


// ! STEP 4: CREATE WEBSERVER WITH EXPRESS--------------------------

app.use('/electronic', routeElectronic);


// STEP 5: LISTEN PORT-----------------------------------
app.listen(8000);
