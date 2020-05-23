class stack {
  constructor() {
    this._storage = {}
    this._length = 0
  }

  push(value) {
    this._storage[++this._length] = value;
    return this._storage;

  }

  pop() {
    if (this._length > -1) {
      this._length = this._length - 1;
      this._storage = this._storage[this._length];
      return this._storage[this._length];
    }
    return false;
  }

  peek() {
    return this._storage[this._length - 1];
  }
}

let classObj = new stack();
console.log(classObj.push(10))
console.log(classObj.push(11))
console.log(classObj.pop())