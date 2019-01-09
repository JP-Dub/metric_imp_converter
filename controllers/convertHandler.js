/*
*
*
*       Complete the handler logic below
*       
*       
*/

let math = require('mathjs');

function convertNumberString(string) {
   var num        = 1,
       decimal    = string.match(/\./),
       fraction   = string.match(/\//),
       isNotValid = string.match(/(\.).+\1|(\/).+\2|[^0-9\/.]/),
       results;
   
   return ( isNotValid ) ? 'invalid number' 
   : !string ? num  
   : (decimal && fraction) ? (
     results = string.split('.'),
     parseInt(results[0]) + math.eval(results[1]))
   : math.eval(string);
};

function convertUnitString(string) {
  let reg    = /lbs|kg|mi|km|gal|L/i,
      unit   = string.match(reg);
      
  unit ? unit = unit[0] : false;
  
  return !unit || string.length > unit.length ? 'invalid unit': unit;  
};


function ConvertHandler() {
  let index, num, errors = []; 
  
  this.getNum = function(input) {
    index  = input.indexOf(input.match(/[^0-9\.\/]+$/));
    index == -1 ? index = input.length : false;
    num    = input.substring(0, index);  

    return input == '' ? 1 : num;       
  };
  
  this.getUnit = function(input) {
    return input.substring(index, input.length);
  };
  
  this.getReturnUnit = function(initUnit) {
    let convertUnit = convertUnitString(initUnit),
        units       = ['lbs', 'mi', 'gal','kg', 'km', 'l'],
        location    = units.indexOf(convertUnit.toLowerCase()),
        idx;
    
    location > 2 ? idx = location - 3 : idx = location + 3;

    return location == -1? convertUnit : units[idx];
  };

  this.spellOutUnit = function(unit) {
    var newUnit = unit.toLowerCase();
    let spellOut = {
      mi  : 'miles',   km : 'kilometers',
      lbs : 'pounds',  kg : 'kilograms',
      gal : 'gallons', l  : 'liters'
    };
    
    return spellOut[newUnit];
  };
  
  this.convert = function(initNum, initUnit) {
    let num = convertNumberString(initNum),
        convertUnit = convertUnitString(initUnit);
    errors = [];
    num == 'invalid number' ?  errors.push(num) : false;
    convertUnit == 'invalid unit' ? errors.push(convertUnit) : false;
    
    const conversion = {
      gal : 3.78541,  l   : 3.78541,
      lbs : 0.453592, kg  : 0.453592,
      mi  : 1.60934,  km  : 1.60934
    }
    
    return convertUnit == 'invalid unit' || num == 'invalid number' ? num 
    : convertUnit.match(/gal|lbs|mi/i) ? num * conversion[convertUnit.toLowerCase()]
    : num / conversion[convertUnit.toLowerCase()];
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    
    if(!errors.length) {   
      let unitFrom = this.spellOutUnit(initUnit),
          unitTo   = this.spellOutUnit(returnUnit);
      
      return initNum + ' ' + unitFrom + ' converts to ' + Number.parseFloat(returnNum).toFixed(5) + ' ' + unitTo;  
    } else {    
      return errors.length > 1 ? 'invalid number and unit' : errors[0];
    } 
    
  };
  
}

module.exports = ConvertHandler;
