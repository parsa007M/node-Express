
// Sample export!

/* module.exports = function(){
    console.log("ElectronicController is called!");
} */

// ! Different Export Types :======================================================

// ! 1st Way:
// App.js:
/* var ctrlElectronic = require('./ElectronicController')(); */

//or

// ! 2nd Way: like using express object
/* var ctrlElectronic = require('./ElectronicController');
var objectElectronic = ctrlElectronic(); */

//or
// ! 3rd Way: We can give paramater:

// ElectronicController.js
/* module.exports = function(message){
    console.log("ElectronicController is called!"+message)}; */

// App.js:
/* var ctrlElectronic = require('./ElectronicController');
var objectElectronic = ctrlElectronic("Hello");
 */
 // ! ======================================================

 // ! STEP 1: DEFINITION----------------------------

 var path = require('path')

 // A module is loaded once. Then it is called in other files!
 // We call here the express used by the App.js
 var express = require('express');
 
 // We want express to create a router class
 var router = express.Router();
 
  // ! ======================================================
 
  // ! STEP 2: CREATE CONTROLLER----------------------------
 // STEP 2.1: HOMECONTROLLER
 
 
 module.exports.index = function(req,res){
     res.sendFile(path.join(__dirname,'index.html'))
 }
 
 //  STEP 2.2: LOGINCONTROLLER
 
 module.exports.computer = function(req,res){
     res.sendFile(path.join(__dirname,'login.html'))
 }
 
  // ! ======================================================
 
 // ! STEP 3: ROUTER----------------------------------------
 
 // STEP 3.1: HOME ROUTER
 router.get('/', module.exports.index);
 
 // STEP 3.2: LOGIN ROUTER
 router.get('/computer',module.exports.computer);
 
 // We export the router as an export object
 module.exports = router;
 