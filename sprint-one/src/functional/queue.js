var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var lastIndex = 0;
  var firstIndex = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[lastIndex] = value;
    lastIndex++;
  };

  someInstance.dequeue = function(){
    var tmpValue = storage[firstIndex];

    if (tmpValue !== undefined){
      delete storage[firstIndex];
      firstIndex++;
    }

    return tmpValue;    
  };

  someInstance.size = function(){
    return lastIndex - firstIndex;
  };

  return someInstance;
};
