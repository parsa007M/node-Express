// ! EXPRESS MODULE: 
//!=======================================================

// ! PART 1: CREATE SIMPLE HTTP SERVER WITHOUT EXPRESS:

// STEP 1 : DEFINE YOUR CORE MODULES----------------------
var fs  = require('fs');
var path = require('path');

var express = require('express');
var app = express();


// Define your controllers!
var ctrlElectronic = require('./ElectronicController');

// ! STEP 2: DEFINE PUBLIC FOLDER-------------------------
app.use('/public', express.static(path.join(__dirname,'public')))


// ! STEP 4: CREATE WEBSERVER WITH EXPRESS--------------------------

// ! STEP 4.1: HOMEPAGE

app.get('/',ctrlElectronic.index) // I am mapping my directory and controller with get method here!

// ! STEP 4.2: LOGINPAGE
 
app.get('/login', ctrlElectronic.computer) // I am mapping my directory and controller with get method here!


// STEP 5: LISTEN PORT-----------------------------------
app.listen(8000);
