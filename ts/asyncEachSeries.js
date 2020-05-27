const async = require('async');

function getData2() {
  // console.time()
  var a1 = [1, 2, 3, 4, 5, 6, 7, 8];
  for (let index = 0; index < a1.length; index++) {
    console.log(index);
  }
  // console.timeEnd()
  // return "anurag"
}


function getData() {
  // console.time()
  var a1 = [1,2,3,4,5,6,7,8];
  async.forEachSeries(a1, function(n1, callback) {
    console.log(n1);
    callback();
  });
  // console.timeEnd()
  // return "anurag"
}
function getData3() {
  // console.time()
  var a1 = [1,2,3,4,5,6,7,8];
  async.each(a1, function(n1, callback) {
    console.log(n1);
    callback();
  });
  // console.timeEnd()
  // return "anurag"
}

// console.log(getData());
console.log(getData2());
// console.log(getData3());
