var makeTree = function(value){
  var tree = {};
  tree.value = value;
  tree.children = [];
  extend(tree, treeMethods);
  return tree;
};


var treeMethods = {};

treeMethods.addChild = function (value) {
  var child = makeTree(value);
  this.children.push(child);
};

treeMethods.contains = function (target) {
  var node = this;
  var found = false;
  var traverseTree = function (node) {
    if(node.value === target) {
      found = true;
    } else {
      for (var i = 0; i < node.children.length; i++) {
        traverseTree(node.children[i]);
      }
    }
  };
  traverseTree(node);
  return found;
};

var extend = function(to, from){
  for (var key in from) {
    to[key] = from[key];
  }
};
