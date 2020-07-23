// ! PART 1: CREATE SIMPLE HTTP SERVER WITHOUT EXPRESS:

// STEP 1 : DEFINE YOUR CORE MODULES----------------------
var http = require('http');
var fs  = require('fs');

// ! STEP 2: CREATE CONTROLLER----------------------------

// ! STEP 2.1: HOMECONTROLLER

var homeController = function(req, res){
    fs.readFile('index.html', function(err, data){
        res.write(data);
        res.end('Home Message is finished!');

        console.log('homeController');
    });
}

// ! STEP 2.2: LOGINCONTROLLER

var loginController = function(req, res){
    fs.readFile('login.html', function(err, data){
        res.write(data);
        res.end('Login Message is finished!');
    });
}


// STEP 3: CREATE YOUR SERVER-----------------------------

var server = http.createServer(function(req, res){

    if( req.url == '/'){ // If the page is home directory
        homeController(req,res);
    }

    if ( req.url == '/login'){ // If the page is login directory
       loginController(req,res);
    }

    console.log(req.url);
});

// STEP 4: LISTEN PORT-----------------------------------
server.listen(8000);
