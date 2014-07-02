var makeBinarySearchTree = function(value){
  var binarySearchTree = Object.create(binarySearchTreeMethods);
  binarySearchTree.left = undefined;
  binarySearchTree.right = undefined;
  binarySearchTree.value = value;
  return binarySearchTree;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value, node){
  if (node === undefined) {
    node = this;
  }
  if (value > node.value) {
    if (node.right === undefined) {
      node.right = makeBinarySearchTree(value);
    } else {
      this.insert(value, node.right);
    }
  } else {
    if (node.left === undefined) {
      node.left = makeBinarySearchTree(value);
    } else {
      this.insert(value, node.left);
    }
  }

};

binarySearchTreeMethods.contains = function (value, node){
  if (node === undefined) {
    node = this;
  }
  if (value > node.value) {
    if (node.right === undefined){
      return false;
    } else if (node.right.value === value) {
      return true;
    } else {
      return this.contains(value, node.right);
    }
  } else {
    if (node.left === undefined) {
      return false;
    } else if(node.left.value === value) {
      return true;
    } else {
      return this.contains(value, node.left);
    }
  }

};

binarySearchTreeMethods.depthFirstLog = function(){

};
