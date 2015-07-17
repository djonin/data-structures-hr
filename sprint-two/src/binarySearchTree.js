var BinarySearchTree = function(value){
	var tree = Object.create(BinarySearchTree.prototype);

	tree.value = value;
	tree.left = null;
	tree.right = null;

	return tree;
};

BinarySearchTree.prototype.breadthFirstLog = function(callback) {
	if(!callback) {
		callback = function(value) {
			console.log(value);
		}
	}
	var currentNodes = [];
	currentNodes.push(this);
	while(currentNodes.length > 0) {
		var nextNodes = [];
		for (var i = 0; i<currentNodes.length; i++) {
			callback(currentNodes[i].value);
			if(currentNodes[i].left) {
				nextNodes.push(currentNodes[i].left);
			}
			if(currentNodes[i].right) {
				nextNodes.push(currentNodes[i].right);
			}
		}
		currentNodes = nextNodes;
	}
}

BinarySearchTree.prototype.insert = function(value){
	if (value > this.value){
		if (!this.right){
			this.right = BinarySearchTree(value);
		}else{
			this.right.insert(value);
		}
	}else{
		if (!this.left){
			this.left = BinarySearchTree(value);
		}else{
			this.left.insert(value);
		}
	}
}

BinarySearchTree.prototype.contains = function(value){	
	if (this.value === value){
		return true;
	}

	var targetTree = value > this.value
		? this.right
		: this.left;

	if (!targetTree){
		return false;
	}else{
		return targetTree.contains(value);
	}
}

BinarySearchTree.prototype.depthFirstLog = function(callback){
	if(!callback) {
		callback = function(value) {
			console.log(value);
		}
	}
	callback(this.value);

	if (this.left){
		this.left.depthFirstLog(callback);	
	}

	if (this.right){
		this.right.depthFirstLog(callback);
	}
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
