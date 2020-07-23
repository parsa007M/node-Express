
// A module is loaded once. Then it is called in other files!
// We call here the express used by the App.js
var express = require('express');
// We want express to create a router class
var router = express.Router();

// We are mapping path and controller in router.get method. Therefore, you should require it here!
var controller = require('../controller/ElectronicController');

// mapping path and related controller file
router.get('/', controller.index); // www.amazom.com/electronics
router.get('/computer', controller.computer); // www.amazom.com/electronics/computer

module.exports = router;

