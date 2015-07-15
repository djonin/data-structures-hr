var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = { storage : {}, stackSize : 0};
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
	push : function(value){
    this.storage[this.stackSize] = value;
    this.stackSize++;  
  },

  pop : function(){
    var topVal = this.storage[this.stackSize - 1];

    if(topVal !== undefined){
      delete this.storage[this.stackSize - 1];
      this.stackSize--;
    }

    return topVal;
  },

  size : function(){
    return this.stackSize;
  }
};


