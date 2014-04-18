var Stack = function(){

  // Use an object with numeric keys to store values
  this._storage = {};
  this._size = 0; // Hint: set an initial value here

  // Import methods
  //extend(stackMethods,instance);

};

//var stackMethods = {};

Stack.prototype.push = function(value){
  this._storage[this._size] = value;
  this._size++;
};

Stack.prototype.pop = function(){
    if (this._size){
      var poppedVal = this._storage[--this._size];
    }
    return poppedVal;
};

Stack.prototype.size = function(){
  return this._size;
};


var extend = function (from, to){
  for (var key in from){
    to[key] = from[key];
  }
};
