var makeQueue = function(){
  var instance = Object.create(queueMethods);

  // Use an object with numeric keys to store values
  instance._storage = {};
  instance._firstInLine = 0;
  instance._lastInLine = 0;

  return instance;
};


var queueMethods = {};

queueMethods.enqueue = function(value){
  this._storage[this._lastInLine] = value;
  this._lastInLine++;
};

queueMethods.dequeue = function(){
  if (this._firstInLine < this._lastInLine){
    var dequeuedValue = this._storage[this._firstInLine];
    this._firstInLine++;
    return dequeuedValue;
  }
};

queueMethods.size = function(){
  return this._lastInLine - this._firstInLine;
};
