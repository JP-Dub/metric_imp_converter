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
      var errors = [], err;
    
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);

      initNum == 'invalid number' ?  errors.push(initNum) : false;
      initUnit == 'invalid unit' ? errors.push(initUnit) : false;

     // if (!errors.length) {
         // console.log(initNum)
        var returnNum  = convertHandler.convert(initNum, initUnit),
            returnUnit = convertHandler.getReturnUnit(initUnit);
      //} 
      
      var toString   = convertHandler.getString(initNum, initUnit, returnNum, returnUnit, errors),
          results    = { 'initNum' : initNum || 0, 'initUnit' : initUnit || null, 'returnNum' : returnNum || 0, 'returnUnit' : returnUnit || null, 'string' : toString};
      
      // errors.length == 2 ? err = 'invalid number and unit' : err = errors[0]; 
      // var failed = {'error' : err};
      
      //console.log('results ', results)
      res.json(results);
    });
    
};
