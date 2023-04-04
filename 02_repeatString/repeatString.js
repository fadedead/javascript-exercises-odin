const repeatString = function(string, num) {
  if(num < 0){
    return 'ERROR' 
  }
  if(num > 0){
    return string.repeat(num);
  }
  return ''
};

// Do not edit below this line
module.exports = repeatString;
