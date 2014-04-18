var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var firstInLine = 0;
  var lastInLine =0;

  // Implement the methods below

  instance.enqueue = function(value){
    storage[lastInLine] = value;
    lastInLine++;
  };

  instance.dequeue = function(){
    if (firstInLine < lastInLine){
      var dequeuedValue = storage[firstInLine];
      firstInLine++;
      return dequeuedValue;
    }
  };

  instance.size = function(){
    return lastInLine - firstInLine;
  };

  return instance;
};
