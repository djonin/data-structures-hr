
var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var stackSize = 0;

  // Implement the methods below
  someInstance.push = function(value){
    storage[stackSize] = value;
    stackSize++;  
  };

  someInstance.pop = function(){
    var topVal = storage[stackSize - 1];

    if(topVal !== undefined){
      delete storage[stackSize - 1];
      stackSize--;
    }

    return topVal;
  };

  someInstance.size = function(){
    return stackSize;
  };

  return someInstance;
};
