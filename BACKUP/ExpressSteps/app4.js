// ! EXPRESS MODULE: 
//!=======================================================

// ! PART 1: CREATE SIMPLE HTTP SERVER WITHOUT EXPRESS:

// STEP 1 : DEFINE YOUR CORE MODULES----------------------
// var http = require('http');
var fs  = require('fs');
var path = require('path');

// ! STEP 1.1: ADD EXPRESS
// Import express
var express = require('express');
// Create express object
var app = express();

// ! STEP 2: DEFINE PUBLIC FOLDER-------------------------

// We will open to use the public folder to everbody
app.use('/public', express.static(path.join(__dirname,'public')))

// ! STEP 3: CREATE CONTROLLER----------------------------

// ! STEP 3.1: HOMECONTROLLER

/* var homeController = function(req, res){
    fs.readFile('index.html', function(err, data){
        res.write(data);
        res.end('Home Message is finished!');

        console.log('homeController');
    });
}
 */

 app.get('/',function(req,res){
    fs.readFile('index.html', function(err, data){
        res.write(data);
        res.end('Home Message is finished!');

        console.log('homeController');
    });
 })

// ! STEP 3.2: LOGINCONTROLLER

/* var loginController = function(req, res){
    fs.readFile('login.html', function(err, data){
        res.write(data);
        res.end('Login Message is finished!');
    });
}
 */

 app.get('/login',function(req,res){
    fs.readFile('login.html', function(err, data){
        res.write(data);
        res.end('Login Message is finished!');
    });
 })

// ! STEP 4: DEFINE CONTROLLERS' PATH---------------------

/* router['/']= homeController;
router['/login']=loginController;
 */

// STEP 5: CREATE YOUR SERVER-----------------------------

/* var server = http.createServer(function(req, res){
    if(req.url in router){
        router[req.url](req,res);
    }
}); */

// STEP 6: LISTEN PORT-----------------------------------

// We are not using http server anymore! That's why, we should change the port definition!
server.listen(8000);

// we will use app inspite of server
app.listen(8000);
