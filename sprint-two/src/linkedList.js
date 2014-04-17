var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    //debugger;
    var ref = (this.tail && this.tail.value);
    console.log(ref);
    //
    //this.netx =
    this.tail = makeNode(value);
    this.next = ref;
    this.head = ( this.head || makeNode(value) )
  };

  list.removeHead = function(){

  };

  list.contains = function(target, node){
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
