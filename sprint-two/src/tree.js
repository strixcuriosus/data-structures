var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  var flag = false;
  var walkTree = function(node){
    if (node.value === target) {
      flag = true;
    } else if (node.children.length > 0) {
      for (var i = 0; i < node.children.length; i++){
        walkTree(node.children[i]);
      }

    }
  }
  walkTree(this);

  return flag;
};


var extend = function(to, from){
  for (var key in from) {
    to[key] = from[key];
  }
};

