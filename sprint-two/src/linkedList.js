var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if(this.head === null){
      this.head = this.tail;
    }
  };

  list.removeHead = function(){
    var result = this.head;
    this.head = this.head.next;
    return result;
  };

  list.contains = function(target, node){
    if(!node) {
      node = this.head;
    }

    if(node.value === target) {
      return true;
    } else if (!node.next) {
      return false;
    } else {
      return this.contains(target, node.next);
    }
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
