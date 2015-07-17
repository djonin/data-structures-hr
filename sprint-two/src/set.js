//stable stringify
var stringifyJSON = function(obj) {
  if (typeof obj === "string") {
  	return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
  	var resultArr = [];
  	for (var i = 0; i < obj.length; i++) {
  		resultArr.push(stringifyJSON(obj[i]));
  	}
  	return "[" + resultArr.join(',') + "]";
  } else if (obj && typeof obj === "object") {
  	var resultObj = [];
  	var keysArr = Object.keys(obj);
  	//sort the keys so method is stable
  	keysArr = keysArr.sort();
  	for (var i = 0; i<keysArr.length; i++) {
  		var key = keysArr[i];
  		if (obj[key] !== undefined && typeof obj[key] !== "function") {
  			resultObj.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
  		}
  	}
  	return "{" + resultObj.join(',') + "}";
  } else if (typeof obj === "function") {
  	return undefined;
  }
  return "" + obj;
};

var Set = function(){
  var set = Object.create(setPrototype);
  set.storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
	this.storage[stringifyJSON(item)] = item;
};

setPrototype.contains = function(item){
	return this.storage[stringifyJSON(item)] !== undefined;
};

setPrototype.remove = function(item){
	delete this.storage[stringifyJSON(item)];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
