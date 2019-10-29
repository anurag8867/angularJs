function migratoryBirds(arr) {
  let obj = {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0};
  arr.forEach(function (value, index, array) {
    obj[value] = obj[value] + 1;
  })
  let tempArray = [];
  let keys = Object.keys(obj);
  keys.forEach(function (value, index, array) {
    tempArray.push(obj[value])
  })
  let index = 0, max = [tempArray[0]];
  for (let i = 0; i < tempArray.length; i++) {
    if (max < tempArray[i]) {
      max = tempArray[i];
      index = i;
    }
  }
  return obj;
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));
console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));
