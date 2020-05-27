class queue {
  constructor() {
    this.storage = []
  }

  enqueue(value) {
    return this.storage.push(value);
  }

  dequeue() {
    this.storage.shift();
    return this.storage;
  }
}
