const convertToCelsius = function(F) {
  let temp = 5/9*(F-32)
  return Number(temp.toFixed(1))
};

const convertToFahrenheit = function(C) {
  let temp = (C*9/5)+32
  return Number(temp.toFixed(1))
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
