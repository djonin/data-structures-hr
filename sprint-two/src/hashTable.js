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

  if (this.getUsage() > 75){
    this._limit = this._limit * 2;
    this.allocateNewStorage();
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i) === undefined || this._storage.get(i)[k] === undefined)
  	return null;
  return this._storage.get(i)[k];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tempVar = this._storage.get(i);
  if (tempVar){
    delete tempVar[k];
  }

  this._storage.set(i, tempVar);

  if (this.getUsage() < 25){
    this._limit = Math.ceil(this._limit / 2);
    this.allocateNewStorage();
  }
};

HashTable.prototype.getUsage = function(){
  var count = 0;

  this._storage.each(function(item){
    if (item){
      count += Object.keys(item).length;
    }
  })

  return (count / this._limit) * 100;
}

HashTable.prototype.allocateNewStorage = function(){
  var newStorage = LimitedArray(this._limit);

  var hashTable = this;

  //insert old values into new storage
  this._storage.each(function(value){

    for(var objKey in value){
      var i = getIndexBelowMaxForKey(objKey, hashTable._limit);

      var tempVar = newStorage.get(i);
      if(tempVar == null) {
        tempVar = {}; 
      }

      tempVar[objKey] = value[objKey];
      newStorage.set(i, tempVar);
    }
  });

  this._storage = newStorage;
}



/*
 * Complexity: What is the time complexity of the above functions?
 */
