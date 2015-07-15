console.log("profiler");


for(var i =0; i < 1000; i++){

	//check flag to create
	if (isPseudoClassical){
		var stack = new Stack();
		var queue = new Queue();
	}else{
		var stack = Stack();
		var queue = Queue();
	}

	for(var j = 0; j < 10000; j++){
		stack.push(j);
		queue.enqueue(j);
	}

	for(; j > 0; j--){
		stack.pop();
		queue.dequeue();

		stack.size();
		queue.size();
	}

}