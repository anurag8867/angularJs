let queue = [];

let enqueue = function (ele) {
  queue.push(ele);
  return queue;
}, dequeue = function (ele) {
  if(isEmpty())
      return "underflow"
  return queue.shift();
}, front = function (ele) {
  return queue[0];
}, printQueue = function () {
  return queue;
}, isEmpty = function (ele) {
  return queue.length === 0;
};
// console.log(isEmpty());
// console.log(dequeue());
//
// enqueue(10);
// enqueue(20);
// enqueue(30);
// enqueue(40);
// enqueue(50);
// enqueue(60);
//
// console.log(printQueue());
//
// console.log(front());
// console.log(dequeue());
// console.log(printQueue());

let generatePrintBinary = function (n)
{
  enqueue("1");

  // This loops is like BFS of a tree with 1 as root
  // 0 as left child and 1 as right child and so on
  while (n-- > 0) {
    // print the front of queue
    var s1 = front();
    dequeue();
    console.log(s1);

    // Store s1 before changing it
    var s2 = s1;

    // Append "0" to s1 and enqueue it
    enqueue(s1 + "0");

    // Append "1" to s2 and enqueue it. Note that s2 contains
    // the previous front
    enqueue(s2 + "1");
  }
};
generatePrintBinary(5);
