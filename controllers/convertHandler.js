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


function ConvertHandler() {
  let index, num;
  
  this.getNum = function(input) {
    
    var result;    
    index  = input.indexOf(input.match(/[a-zA-Z]/));
    num    = input.substring(0, index);  
    result = convertNumberString(num);    

    return result;
  };
  
  this.getUnit = function(input) {
    
    let string = input.substring(index, input.length);
     reg  = /lbs|kg|mi|km|gal|L/i,
        unit = string.match(reg);
        unit = unit[0];

    return !unit || string.length > unit.length ? 'invalid unit'
      : unit == 'l' || unit == 'L' ? unit.toUpperCase()
      : unit.toLowerCase();
  
  };
  
  this.getReturnUnit = function(initUnit) {

    let units    = ['lbs', 'mi', 'gal','kg', 'km', 'L'] ,
        location = units.indexOf(initUnit),
        idx;
    
    location > 2 ? idx = location - 3 : idx = location + 3;
  
    return units[idx];
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
