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
  app.set('json spaces', 2);
  app.route('/api/convert')
    .get(function (req, res){
      var numError    = 'invalid number',
          unitError   = 'invalid unit'
          countErrors = 0,
          error;
    
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      
      initNum == 'invalid number' ?  countErrors++ 
      : initUnit == 'invalid unit' ? countErrors + 2
      : countErros == 1 ? res.json('error' : 'invalid number') 
      : countErros == 3 ? res.json('error' : 'invalid number and unit')
      
      
          
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      //console.log('initNum: ', initNum, ', initUnit: ', initUnit, ', returnNum: ', returnNum, ', returnUnit: ', returnUnit, ', string: ' + toString)
      res.json({ 'initNum' : initNum, 'initUnit' : initUnit, 'returnNum' : returnNum, 'returnUnit' : returnUnit, 'string' : toString});
    });
    
};
