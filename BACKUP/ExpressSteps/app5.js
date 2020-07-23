// ! EXPRESS MODULE: 
//!=======================================================

// ! PART 1: CREATE SIMPLE HTTP SERVER WITHOUT EXPRESS:

// STEP 1 : DEFINE YOUR CORE MODULES----------------------
//var fs  = require('fs');
var path = require('path');

var express = require('express');
var app = express();

// ! STEP 2: DEFINE PUBLIC FOLDER-------------------------
app.use('/public', express.static(path.join(__dirname,'public')))

// ! STEP 3: CREATE CONTROLLER----------------------------
// ! STEP 3.1: HOMECONTROLLER

    var indexController = function(req,res){
        res.sendFile(path.join(__dirname,'index.html'))
    }

// ! STEP 3.2: LOGINCONTROLLER

    var loginController = function(req,res){
        res.sendFile(path.join(__dirname,'login.html'))
    }

// ! STEP 4: CREATE WEBSERVER WITH EXPRESS--------------------------

// ! STEP 4.1: HOMEPAGE

app.get('/',indexController) // I am mapping my directory and controller with get method here!

// ! STEP 4.2: LOGINPAGE
 
app.get('/login', loginController) // I am mapping my directory and controller with get method here!


// STEP 5: LISTEN PORT-----------------------------------
app.listen(8000);

