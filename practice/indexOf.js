let a = [10, 20, 30, 40, 50, 60];
console.log(a.indexOf(50));
console.log(a.indexOf(70));
console.log(~a.indexOf(60));
console.log(~a.indexOf(70));
console.log(!~a.indexOf(60));
console.log(!~a.indexOf(70));
console.log(!!~a.indexOf(60));
console.log(!!~a.indexOf(70));