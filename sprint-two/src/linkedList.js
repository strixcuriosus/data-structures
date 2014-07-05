var makeLinkedList = function(){
  var linkedList = {};
  linkedList.head = null;
  linkedList.tail = null;

  linkedList.addToTail = function (value) {
    var node = makeNode(value);
    if (! this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  };

  linkedList.removeHead = function() {
    if(this.head) {
      this.head = this.head.next;
    }
  };

  linkedList.contains = function (target) {
    var node = this.head;
    while (node) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
  };

  return linkedList;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
