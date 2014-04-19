var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._size =0;
};

HashTable.prototype.insert = function(k, v){
  if (this._size > Math.floor(0.75 * this._limit));
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, [k, v]);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return (this._storage.get(i))[1];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, [null, null]);
};

