let obj = {};
for (let index = 0; index < 1000; index++) {
  // obj[index] = {"FirstElement" +index : "FirstElement" +index };
  let key = "FourthElement" +index;
  obj[key] = key;
}
console.log(obj)
