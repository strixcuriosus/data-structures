var Queue = function() {
  this._storage = {};
  this._size = 0;
  this._lowestIndex = 0;
};

Queue.prototype.enqueue = function (value) {
  this._storage[this._size + this._lowestIndex] = value;
  this._size++;
};

Queue.prototype.dequeue = function() {
  if (this._size > 0) {
    var dequeued = this._storage[this._lowestIndex];
    this._size--;
    this._lowestIndex++;  
    return dequeued;    
  } else {
    return null;
  }
};

Queue.prototype.size = function() {
  return this._size;
};
