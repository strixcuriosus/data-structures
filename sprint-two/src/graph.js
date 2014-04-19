var Graph = function(){

  this.nodes = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  this.nodes[newNode] = {value: newNode, links: {} };
  if (toNode !== undefined) {
    this.nodes[toNode]['links'][newNode] = true;
    this.nodes[newNode]['links'][toNode] = true;
  } else if(Object.keys(this.nodes).length === 2) {
    var key = Object.keys(this.nodes)[0];
    console.log('key' + key);
    this.nodes[key]['links'][newNode] = true;
    this.nodes[newNode]['links'][key] = true;

  }

};

Graph.prototype.contains = function(node){
  return !!this.nodes[node];
};

Graph.prototype.removeNode = function(node){
  var toBeDeleted = [];
  for(var key in this.nodes[node]['links']) {
    if (Object.keys(this.nodes[key]['links']).length === 1){
      toBeDeleted.push(key);
    }
    delete this.nodes[key]['links'][node];
  }
  for (var i = 0; i < toBeDeleted.length; i++) {
    delete this.nodes[toBeDeleted[i]];
  }
  delete this.nodes[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  return !!this.nodes[fromNode]['links'][toNode];
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodes[toNode]['links'][fromNode] = true;
  this.nodes[fromNode]['links'][toNode] = true;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.nodes[toNode]['links'][fromNode];
  delete this.nodes[fromNode]['links'][toNode];
  if(Object.keys(this.nodes[fromNode]['links']).length === 0) {
    delete this.nodes[fromNode];
  }
  if(Object.keys(this.nodes[toNode]['links']).length === 0) {
    delete this.nodes[toNode];
  }
};
//
var graph = new Graph();
graph.addNode("9");
graph.addNode("10");
graph.addNode("11","10");
graph.addNode("12","11");
graph.addNode("13","11");
//
//
