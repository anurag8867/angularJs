function isExist(value, arr2) {
  for (let index1 = 0; index1 < arr2.length; index1++) {
    if (value === arr2[index1]) {
      return true
    }
  }
  return false;
}

function distictFromArray(arr1, arr2) {
  let found = false, distinctElement = [];
  for (let index = 0; index < arr1.length; index++) {
    if (!isExist(arr1[index], arr2)) {
      distinctElement.push(arr1[index]);
    }
  }
  for (let index = 0; index < arr2.length; index++) {
    if (!isExist(arr2[index], arr1)) {
      distinctElement.push(arr2[index]);
    }
  }
  return distinctElement;
}

console.time("start")
console.log(distictFromArray([1, 4, 5, 6], [7, 8, 5, 6]));
console.timeEnd("start")
