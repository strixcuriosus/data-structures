var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var firstInLine = 0;
  var nextKey = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    size++;
    storage[nextKey] = value;
    nextKey++;
  };

  instance.dequeue = function(){
    if (size > 0){
      var dequeuedItem = storage[firstInLine];
      delete storage[firstInLine];
      size--;
      firstInLine++;
    }
    return dequeuedItem;
  };

  instance.size = function(){
    return size;
  };

  return instance;
};

