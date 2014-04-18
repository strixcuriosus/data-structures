var Queue = function() {
  // Use an object with numeric keys to store values
  this._storage = {};
  this._firstInLine = 0;
  this._lastInLine = 0;

};


//var queueMethods = {};

Queue.prototype.enqueue = function(value){
  this._storage[this._lastInLine] = value;
  this._lastInLine++;
};

Queue.prototype.dequeue = function(){
  if (this._firstInLine < this._lastInLine){
    var dequeuedValue = this._storage[this._firstInLine];
    this._firstInLine++;
    return dequeuedValue;
  }
};

Queue.prototype.size = function(){
  return this._lastInLine - this._firstInLine;
};
