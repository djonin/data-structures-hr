var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.firstIndex = 0;
  instance.lastIndex = 0;

  return instance;
};

var queueMethods = {
	
	enqueue : function(value){
    this.storage[this.lastIndex] = value;
    this.lastIndex++;
  },

  dequeue : function(){
    var tmpValue = this.storage[this.firstIndex];

    if (tmpValue !== undefined){
      delete this.storage[this.firstIndex];
      this.firstIndex++;
    }

    return tmpValue;    
  },

  size : function(){
    return this.lastIndex - this.firstIndex;
  }
};
