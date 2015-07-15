var Stack = function(){
  this.storage = {};

  this.stackSize = 0;
}

Stack.prototype.push = function(value){
	this.storage[this.stackSize] = value;
	this.stackSize++;  
};

Stack.prototype.pop = function(){
	var topVal = this.storage[this.stackSize - 1];

	if(topVal !== undefined){
	  delete this.storage[this.stackSize - 1];
	  this.stackSize--;
	}

	return topVal;
};

Stack.prototype.size = function(){
	return this.stackSize;
};