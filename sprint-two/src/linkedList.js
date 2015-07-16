var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value){
    var newNode = Node(value);

    if (list.head){
      list.head.previous = newNode;
      newNode.next = list.head;
    }

    if (!list.tail){
      list.tail = newNode;
    }

    list.head = newNode;

  }

  list.removeTail = function() {
    var removedTail = list.tail;

    if (removedTail){
      list.tail = list.tail.previous;
      list.tail.next = null;
    }

    if(!list.tail){
      list.head = null;
    }

    return removedTail.value;
  }

  list.addToTail = function(value){
    var newNode = Node(value);

    if (list.tail){
      list.tail.next = newNode;
      newNode.previous = list.tail;
    }

    if (!list.head){
      list.head = newNode;
    }

    list.tail = newNode;
  };

  list.removeHead = function(){
    var removedHead = list.head;

    if (list.head){
      list.head = list.head.next;
      if(list.head){
        list.head.previous = null;
      }
    }

    if(!list.head){
      list.tail = null;
    }

    return removedHead.value;
  };

  list.contains = function(target){
    var currentNode = list.head;

    while(currentNode !== null){
      if (target === currentNode.value){
        return true;
      }else{
        currentNode = currentNode.next;
      }
    }

    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
