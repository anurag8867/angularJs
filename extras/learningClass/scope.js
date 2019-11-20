function f1() {
  var a = 2;
  return function f2() {
    return a;
  }
}


 console.log(f1());
let a = [1];
let b = [1];
console.log(a === b);
