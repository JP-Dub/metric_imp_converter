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
      var error = [],
          err;
    
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      
      initNum == 'invalid number' ?  error.push(initNum)
      : initUnit == 'invalid unit' ? error.push(initUnit)
      : false;
      
      !error.length ? err.length == 2 ? err = 'invalid number and unit' : err = error[
          
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      //console.log('initNum: ', initNum, ', initUnit: ', initUnit, ', returnNum: ', returnNum, ', returnUnit: ', returnUnit, ', string: ' + toString)
      res.json({ 'initNum' : initNum, 'initUnit' : initUnit, 'returnNum' : returnNum, 'returnUnit' : returnUnit, 'string' : toString});
    });
    
};
