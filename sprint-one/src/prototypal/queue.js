var makeQueue = function(){
  // Hey! Copy your code from src/functional/queue.js and paste it here
  var instance = Object.create(queueMethods);

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.sizeVar = 0;
  instance.firstInLine = 0;
  instance.nextKey = 0;

  // Implement the methods below
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.sizeVar++;
  this.storage[this.nextKey] = value;
  this.nextKey++;
};

queueMethods.dequeue = function(){
  if (this.sizeVar > 0){
    var dequeuedItem = this.storage[this.firstInLine];
    delete this.storage[this.firstInLine];
    this.sizeVar--;
    this.firstInLine++;
  }
  return dequeuedItem;
};

queueMethods.size = function(){
  return this.sizeVar;
};
