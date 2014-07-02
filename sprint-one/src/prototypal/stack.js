var makeStack = function(){
  var instance = Object.create(stackMethods);

  // Use an object with numeric keys to store values
  instance._storage = {};
  instance._size = 0; // Hint: set an initial value here

  // Import methods
  //extend(stackMethods,instance);

  return instance;
};

var stackMethods = {};

stackMethods.push = function(value){
  this._storage[this._size] = value;
  this._size++;
};

stackMethods.pop = function(){
    if (this._size){
      var poppedVal = this._storage[--this._size];
    }
    return poppedVal;
};

stackMethods.size = function(){
  return this._size;
};


var extend = function (from, to){
  for (var key in from){
    to[key] = from[key];
  }
};
