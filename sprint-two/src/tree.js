var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push({value: value});
};

treeMethods.contains = function(target){
};


var extend = function(to, from){
  for (var key in from) {
    to[key] = from[key];
  }
};
