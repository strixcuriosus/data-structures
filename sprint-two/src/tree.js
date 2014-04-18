var makeTree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  var targetFound = false;
  var node = node || this;
  var traverseTree = function(node){
    if (node.value === target) {
      targetFound = true;
    } else if(node.children.length){
      for (var i = 0; i < node.children.length; i++) {
        traverseTree(node.children[i]);
      }
    } else {
    }
  };
  traverseTree()
  return targetFound;
};

