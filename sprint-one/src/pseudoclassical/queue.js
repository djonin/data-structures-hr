var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.firstIndex = 0;
  this.lastIndex = 0;


};

Queue.prototype.enqueue = function(value){
  this.storage[this.lastIndex] = value;
  this.lastIndex++;
};

Queue.prototype.dequeue = function(){
  var tmpValue = this.storage[this.firstIndex];

  if (tmpValue !== undefined){
    delete this.storage[this.firstIndex];
    this.firstIndex++;
  }

  return tmpValue;    
};

Queue.prototype.size = function(){
  return this.lastIndex - this.firstIndex;
};