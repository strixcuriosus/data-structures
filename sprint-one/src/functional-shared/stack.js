var makeStack = function() {
  // Hey! Copy your code from src/functional/stack.js and paste it here
  var instance = {};

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.sizeVar = 0; // Hint: set an initial value here
  _.extend(instance, stackMethods);
  // Implement the methods below


  return instance;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.sizeVar] = value;
  this.sizeVar++;
};

stackMethods.pop = function(){

  if (this.sizeVar > 0) {
    this.sizeVar--;
    var val = this.storage[this.sizeVar];
  }
  return val;
};

stackMethods.size = function(){
  return this.sizeVar;
};
