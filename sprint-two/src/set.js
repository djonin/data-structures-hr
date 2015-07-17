var Set = function(){
  var set = Object.create(setPrototype);
  set.storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
	this.storage[JSON.stringify(item)] = item;
};

setPrototype.contains = function(item){
	return this.storage[JSON.stringify(item)] !== undefined;
};

setPrototype.remove = function(item){
	delete this.storage[JSON.stringify(item)];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
