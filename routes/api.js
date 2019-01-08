/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();
  app.set({'json spaces': 2});
  app.route('/api/convert')
    .get(function (req, res){
      var error = [],
          err, results, failed;
    
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      
      console.log(initNum, initUnit)
      initNum == 'invalid number' ?  error.push(initNum)
      : initUnit == 'invalid unit' ? error.push(initUnit)
      : false;
      console.log(error)
      if (!error.length) {
          
       var returnNum  = convertHandler.convert(initNum, initUnit),
           returnUnit = convertHandler.getReturnUnit(initUnit),
           toString   = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
           results    = { 'initNum' : initNum, 'initUnit' : initUnit, 'returnNum' : returnNum, 'returnUnit' : returnUnit, 'string' : toString};
      } 
      
      error.length == 2 ? err = 'invalid number and unit' : err = error[0]; 
      failed = {'error' : err};
      
      //console.log('results ', results)
      res.json(results||failed);
    });
    
};
