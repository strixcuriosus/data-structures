var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._size = 0;
  this._resizing = false;
};

HashTable.prototype.insert = function(key, val){
  var index = getIndexBelowMaxForKey(key);
  this._storage.set(index, (this._storage.get(index) || []));
  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i] && bucket[i][0] === key) {
      bucket[i][1] = val;
      this._storage.set(index, bucket);
      return;
    }
  }
  bucket.push([key, val]);
  this._storage.set(index, bucket);
  if (!this._resizing) {
    this._size++;
    if ((this._size / this._limit)  > 0.75) {
      this._resizing = true;
      //copy current storage
      var oldStorage = this._storage;
      //create new storage 2x size
      this._limit *= 2;
      this._storage = makeLimitedArray(this._limit);
      //move old storage items to new storage
      oldStorage.each(function(bucket){
        for (var i = 0; i < bucket.length; i++) {
          this._insert(bucket[i][0], bucket[i][1]);
        }
      });

      this._resizing = false;
    }  
  }
};

HashTable.prototype.retrieve = function(key){
  var index = getIndexBelowMaxForKey(key);
  var bucket = this._storage.get(index);
  if (! bucket) {
    return null;
  } else {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i] && bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
    return null; 
  }
};

HashTable.prototype.remove = function(key){
  var index = getIndexBelowMaxForKey(key);
  var bucket = this._storage.get(index);
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if(bucket[i][0] === key){
        bucket[i][1] = null;
      }
    }    
  }
  this._size -= 1;
  if (! this._resizing) {
    if ((this._size / this._limit)  < 0.25) {
      this._resizing = true;
      //copy current storage
      var oldStorage = this._storage;
      //create new storage 2x size
      this._limit = Math.floor(this._limit * 0.5);
      this._storage = makeLimitedArray(this._limit);
      //move old storage items to new storage
      oldStorage.each(function(bucket){
        for (var i = 0; i < bucket.length; i++) {
          this._insert(bucket[i][0], bucket[i][1]);
        }
      });
      this._resizing = false;
    }  
  }
};

