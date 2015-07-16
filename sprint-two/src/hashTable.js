var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

 	var tempVar = this._storage.get(i);
  if(tempVar == null) {
  	tempVar = {};
  }

  tempVar[k] = v;
  this._storage.set(i, tempVar);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i)[k] === undefined)
  	return null;
  return this._storage.get(i)[k];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tempVar = this._storage.get(i);
  delete tempVar[k];
  this._storage.set(i, tempVar);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
