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
    
      var input      = req.query.input,
          initNum    = convertHandler.getNum(input),
          initUnit   = convertHandler.getUnit(input),
          returnNum  = convertHandler.convert(initNum, initUnit),
          returnUnit = convertHandler.getReturnUnit(initUnit),
          toString   = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
          
    res.json({'initNum'   : initNum,   
              'initUnit' : initUnit, 
              'returnNum' : returnNum,
              'returnUnit' : returnUnit, 
              'string'    : toString
              });
   
    });
    
};
