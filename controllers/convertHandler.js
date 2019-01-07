/*
*
*
*       Complete the handler logic below
*       
*       
*/

let math = require('mathjs');

function convertNumberString(string) {
  var decimal  = string.match(/\./),
      fraction = string.match(/\//),
      num      = 1;
    
  if(!string) {
    
    return num;
  }
  
  if(decimal && fraction) {
    var results = string.split('.');
    
    return math.eval(results[0] + results[1])
  } 
  
  num = math.eval(string);
  return isNaN(num) ? 'invalid number' : num;
}

function convertUnitString(string) {
  
  let reg  = /lbs|kg|mi|km|gal|L/i,
      unit = string.match(reg);

  return !unit? 'invalid unit': unit[0] == 'l' || unit[0] == 'L' ? unit[0].toUpperCase(): unit[0].toLowerCase(); 
  
}

function ConvertHandler() {
  let index, num, unit;
  
  this.getNum = function(input) {
    var result;    
    index  = input.indexOf(input.match(/[a-zA-Z]/));
    num    = input.substring(0, index);  
    result = convertNumberString(num);    

    return result;
  };
  
  this.getUnit = function(input) {
    unit = input.substring(index, input.length);
    
    return convertUnitString(unit);
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
