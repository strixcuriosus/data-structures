var makeStack = function() {
  // copied from fun-shared
  var instance = Object.create(stackMethods);
  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.sizeVar = 0; // Hint: set an initial value here
  // Implement the methods below
  return instance;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.sizeVar] = value;
  this.sizeVar++;
};

stackMethods.pop = function(){
  var val = null;
  if (this.sizeVar > 0) {
    this.sizeVar--;
    val = this.storage[this.sizeVar];
  }
  return val;
};

stackMethods.size = function(){
  return this.sizeVar;
};
