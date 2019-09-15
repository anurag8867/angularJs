var Stack = function () {
  this.count = 0;
  this.storage = {};
}
console.log(Stack())

Stack.prototype.push = function (value) {
  if(!this.count) {
    return undefined
  }
  this.storage[this.count] = value;
  this.count--;
  let result = this.storage[this.count];
  delete this.storage[this.count];
  return result;
}

// Returns the length of the stack
Stack.prototype.size = function() {
  return this.count;
}

Stack.prototype.pop = function(value) {
  this.storage[this.count] = value;
  this.count++;
}
