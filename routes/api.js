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

      initNum == 'invalid number' ?  error.push(initNum) : false;
      initUnit == 'invalid unit' ? error.push(initUnit) : false;

      if (!error.length) {
          
        var returnNum  = convertHandler.convert(initNum, initUnit),
            returnUnit = convertHandler.getReturnUnit(initUnit);
      } 
      
    var toString   = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
        results    = { 'initNum' : nullinitNum, 'initUnit' : initUnit, 'returnNum' : returnNum, 'returnUnit' : returnUnit, 'string' : toString};
      
      error.length == 2 ? err = 'invalid number and unit' : err = error[0]; 
      failed = {'error' : err};
      
      //console.log('results ', results)
      res.json(results||failed);
    });
    
};
