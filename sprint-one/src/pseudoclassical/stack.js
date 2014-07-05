var Stack = function() {
  this._storage = {};
  this._size = 0;
};

Stack.prototype.push = function(value) {
  this._storage[this._size] = value;
  this._size++;
};

Stack.prototype.pop = function() {
  if (this._size > 0) {
    this._size--;
    return this._storage[this._size];    
  }
};

Stack.prototype.size = function () {
  return this._size;
};
