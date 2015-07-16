var BinarySearchTree = function(value){
	var tree = Object.create(BinarySearchTree.prototype);

	tree.value = value;
	tree.left = null;
	tree.right = null;

	return tree;
};

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
