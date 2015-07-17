
var BinarySearchTree = function(value){
	var tree = Object.create(BinarySearchTree.prototype);

	tree.value = value;
	tree.left = null;
	tree.right = null;

	tree.minDepth = 0;

	tree.maxDepth = 0;

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

	var recursiveInsert = function(tree) {
		var newDepth = 0;
		if (value > tree.value){
			if (!tree.right){
				tree.right = BinarySearchTree(value);
				newDepth = 1;
			} else {
				newDepth = recursiveInsert(tree.right);
			}
		} else {
			if (!tree.left){
				tree.left = BinarySearchTree(value);
				newDepth = 1;
			}else{
				newDepth = recursiveInsert(tree.left);
			}
		}
		if(tree.left && tree.right) {
			tree.minDepth = tree.left.minDepth < tree.right.minDepth ? tree.left.minDepth+1 : tree.right.minDepth+1;
		}
		if(newDepth > tree.maxDepth) {
			tree.maxDepth = newDepth;
		}
		return newDepth+1;
	}
	recursiveInsert(this);
	if((this.maxDepth > 4)&&(this.maxDepth > (this.minDepth * 2))) {
		this.rebalance();
	}
}

BinarySearchTree.prototype.rebalance =  function() {
	debugger;
	var list = [];
	this.depthFirstLog(function(item){list.push(item);});
	list.sort();
	var firstIndex = Math.floor(list.length/2);
	var newTree = BinarySearchTree(list[firstIndex]);

	var recursivePopulate = function(start, end) {
		if(start >= end) {
			newTree.insert(list[start]);
			return;
		}
		var newNodeIndex = Math.floor(start + ((end-start)/2));
		newTree.insert(list[newNodeIndex]);
		recursivePopulate(start, newNodeIndex-1);
		recursivePopulate(newNodeIndex+1, end);
	}

	recursivePopulate(0, Math.floor(list.length / 2));
	recursivePopulate(Math.floor(list.length / 2), list.length);
	debugger;
	this.value = newTree.value;
	this.left = newTree.left;
	this.right = newTree.right;
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

var b = BinarySearchTree(50);
for(var i = 0; i<100; i++) {
	b.insert(Math.random()*100);
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
