// var passed = 3;
// var addTo = function () {
//   var inner = 2;
//   return inner + passed;
// }
// console.dir(addTo)
// console.log(addTo())

var addTo = function (passed) {
  var add = function (inner) {
    return inner + passed;
  };
  return add;
};
// var anu3 = new addTo(3);
// var anu4 = new addTo(4);
var anu4 = addTo(4);
var anu3 = addTo(3);
console.dir(anu3(3))
console.dir(anu4(4))
