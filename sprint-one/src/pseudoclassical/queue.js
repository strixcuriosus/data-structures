var Queue = function(){
  // Hey! Copy your code from src/functional/queue.js and paste it here

  // Use an object with numeric keys to store values
  this.storage = {};
  this._size = 0;
  this.firstInLine = 0;
  this.nextKey = 0;

  // Implement the methods below

};


Queue.prototype.enqueue = function(value){
  this._size++;
  this.storage[this.nextKey] = value;
  this.nextKey++;
};

Queue.prototype.dequeue = function(){
  if (this._size > 0){
    var dequeuedItem = this.storage[this.firstInLine];
    delete this.storage[this.firstInLine];
    this._size--;
    this.firstInLine++;
  }
  return dequeuedItem;
};

Queue.prototype.size = function(){
  return this._size;
};

