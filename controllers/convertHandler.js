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
    
    return parseInt(results[0]) + math.eval(results[1])
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
    
    let string = input.substring(index, input.length),
        reg    = /lbs|kg|mi|km|gal|L/i,
        unit   = string.match(reg);
        if(unit) {
          unit = unit[0];
        }

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
    
    let spellOut = {
      mi  : 'miles',   km : 'kilometers',
      lbs : 'pounds',  kg : 'kilograms',
      gal : 'gallons', L  : 'liter'
    };
    
    return spellOut[unit];
  };
  
  this.convert = function(initNum, initUnit) {
    console.log(initNum, initUnit)
    const conversion = {
      gal : 3.78541,  L   : 3.78541,
      lbs : 0.453592, kg  : 0.453592,
      mi  : 1.60934,  km  : 1.60934
    }
  
    return initUnit.match(/gal|lbs|mi/) ? (initNum * conversion[initUnit]).toFixed(5) 
    : (initNum / conversion[initUnit]).toFixed(5);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {

    let unitFrom = this.spellOutUnit(initUnit),
        unitTo   = this.spellOutUnit(returnUnit);
    
    return initNum + ' ' + unitFrom + ' converts to ' + Number.parseFloat(returnNum).toFixed(5) + ' ' + unitTo;
    
  };
  
}

module.exports = ConvertHandler;
