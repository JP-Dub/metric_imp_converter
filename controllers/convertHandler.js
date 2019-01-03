/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  let index, num, unit;
  
  this.getNum = function(input) {
    var result;
        index = input.indexOf(input.match(/[a-zA-Z]/));
        num = input.substring(0, index);
    
    return num;
  };
  
  this.getUnit = function(input) {
    var result;
        unit = input.substring(index, input.length);
    console.log(unit)
    return result;
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
