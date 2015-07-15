var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  

 	var instance = Object.create(stackMethods);
	instance.storage = {};
	instance.stackSize = 0;

  return instance;
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





