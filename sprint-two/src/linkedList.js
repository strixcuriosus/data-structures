var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var next = makeNode(value);
    if (!list.head) {
      list.head = next;
      list.tail = next;
    } else {
      list.tail.next = next;
      list.tail = next;
    }
  };

  list.removeHead = function(){
    this.head = this.head.next;
  };

  list.contains = function(target, node){
    node = node || list.head;
    if (node.value === target) {
      return true;
    } else if (node.next) {
      return list.contains(target, node.next);
    } else {
      return false
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
