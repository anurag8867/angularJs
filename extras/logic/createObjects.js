let obje = {'10': 4, '20': 3, '30': 1, '50': 1},
    size = 0;
Object.keys(obje).forEach(function (element) {
  size += parseInt(obje[element] / 2);
});
console.log(size);


// let zero = 0;
// let sockObj = {};
// sockObj[10] = ++zero;
// console.log(sockObj)


// let obj = {};
// for (let index = 0; index < 1000; index++) {
//   // obj[index] = {"FirstElement" +index : "FirstElement" +index };
//   let key = "FourthElement" +index;
//   obj[key] = key;
// }
// console.log(obj)
