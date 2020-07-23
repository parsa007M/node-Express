// ! PART 1: CREATE SIMPLE HTTP SERVER WITHOUT EXPRESS:

// STEP 1 : DEFINE YOUR CORE MODULES----------------------
var http = require('http');
var fs  = require('fs');

// STEP 2: CREATE YOUR SERVER-----------------------------

var server = http.createServer(function(req, res){

    if( req.url == '/'){ // If the page is home directory
        fs.readFile('index.html', function(err, data){
            res.write(data);
            res.end('Home Message is finished!');
        });
    }
    if ( req.url == '/login'){
        fs.readFile('login.html', function(err, data){
            res.write(data);
            res.end('Login Message is finished!');
        });
    }

    console.log(req.url);
});

// STEP 3: LISTEN PORT-----------------------------------
server.listen(8000);
