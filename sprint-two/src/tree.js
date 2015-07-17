var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  newTree.parent = null;

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.traverse = function(callback){
	callback(this.value);
	for(var i = 0; i<this.children.length; i++) {
		this.children[i].traverse(callback);
	}
}

treeMethods.addChild = function(value){
	var tree = Tree(value);
	tree.parent = this;

	this.children.push(tree);
};

treeMethods.contains = function(target){
	var recursiveSearch = function(tree) {
		if (tree.value === target) {
			return true;
		}

		for (var i = 0; i < tree.children.length; i++) {
			if(recursiveSearch(tree.children[i])) {
				return true;
			}
		}
		return false;
	}
	return recursiveSearch(this);
};

treeMethods.removeFromParent = function(){
	for (var i =0; i < this.parent.children.length; i++){
		if (this.parent.children[i] === this){
			this.parent.children.splice(i);
		}
	}

	this.parent = null;
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
