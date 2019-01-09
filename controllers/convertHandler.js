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
}


function ConvertHandler() {
  let index, num;
  
  this.getNum = function(input) {
      
    index  = input.indexOf(input.match(/[^0-9\.\/]+$/));
    index == -1 ? index = input.length : false;
    num    = input.substring(0, index);  
    return convertNumberString(num);       
  };
  
  this.getUnit = function(input) {
    
    let string = input.substring(index, input.length),
        reg    = /lbs|kg|mi|km|gal|L/i,
        unit   = string.match(reg);
        
    unit ? unit = unit[0] : false;

    return !unit || string.length > unit.length ? 'invalid unit'
      : unit == 'l' || unit == 'L' ? unit.toUpperCase()
      : unit.toLowerCase();
  
  };
  
  this.getReturnUnit = function(initUnit) {

    let units    = ['lbs', 'mi', 'gal','kg', 'km', 'l'] ,
        location = units.indexOf(initUnit.toLowerCase()),
        idx;
    
    location > 2 ? idx = location - 3 : idx = location + 3;
  
    return units[idx];
  };

  this.spellOutUnit = function(unit) {
    var newUnit = unit.toLowerCase();
    let spellOut = {
      mi  : 'miles',   km : 'kilometers',
      lbs : 'pounds',  kg : 'kilograms',
      gal : 'gallons', l  : 'liters'
    };
    
    return spellOut[unit];
  };
  
  this.convert = function(initNum, initUnit) {
    
    const conversion = {
      gal : 3.78541,  l   : 3.78541,
      lbs : 0.453592, kg  : 0.453592,
      mi  : 1.60934,  km  : 1.60934
    }
  
    return initUnit.match(/gal|lbs|mi/i) ? initNum * conversion[initUnit]
    : initNum / conversion[initUnit];
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit, errors) {
    
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
