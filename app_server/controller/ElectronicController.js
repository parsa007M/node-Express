 // ! STEP 1: DEFINITION----------------------------

var path = require('path')

 // ! STEP 2: CREATE CONTROLLER----------------------------
 
// STEP 2.1: HOMECONTROLLER


module.exports.index = function(req,res){
    res.sendFile(path.join(__dirname,'../../index.html'))
}

//  STEP 2.2: LOGINCONTROLLER

module.exports.computer = function(req,res){
    res.sendFile(path.join(__dirname,'../../login.html'))
}

