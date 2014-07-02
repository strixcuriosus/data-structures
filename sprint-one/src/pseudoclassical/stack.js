var Stack = function() {
  // copied from fun-shared
  // Use an object with numeric keys to store values
  this.storage = {};
  this._size = 0; // Hint: set an initial value here
  // Implement the methods below
};

Stack.prototype.push = function(value){
  this.storage[this._size] = value;
  this._size++;
};

Stack.prototype.pop = function(){
  var val = null;
  if (this._size > 0) {
    this._size--;
    val = this.storage[this._size];
  }
  return val;
};

Stack.prototype.size = function(){
  return this._size;
};

