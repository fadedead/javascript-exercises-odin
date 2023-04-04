const sumAll = function(start, end) {
  if(  !Number.isInteger(start) || start < 0 || !Number.isInteger(end) || end < 0){
    return 'ERROR'
  }
  
  if(start > end){
    let temp = start
    start = end 
    end = temp
  }

  let sum = 0
  while(start <= end){
    sum += start
    start += 1
  }
  return sum
};

// Do not edit below this line
module.exports = sumAll;
