const removeFromArray = function(arr, ...args) {

  let removesIdx = []
  for(let arg of args){
    for(let i = 0;i < arr.length; i++){ 
      if(arr[i] === arg){
      arr.splice(i, 1);
      }
    }
  }
 
 
    
  

  return arr 
};



// Do not edit below this line
module.exports = removeFromArray;
