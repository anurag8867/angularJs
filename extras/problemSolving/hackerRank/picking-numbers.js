function removeDups(arr) {
  let obj = {};
  for (let key of arr) {
    if (!obj[key]) {
      obj[key] = 1
    } else {
      obj[key]++;
    }
  }
  return obj;
}

function createArray(obj) {
  let arr = [];
  for (let key in obj) {
    arr.push(key)
  }
  return arr;
}

function pickingNumbers(a) {
  let freqObj = removeDups(a), getArr = createArray(freqObj), max = 0;
  for (let index = 0; index < getArr.length - 1; index++) {
    for (let index1 = index + 1; index1 < getArr.length; index1++) {
      if (Math.abs(getArr[index] - getArr[index1]) === 0 || Math.abs(getArr[index] - getArr[index1]) === 1) {
        if (max < (freqObj[getArr[index]] + freqObj[getArr[index1]])) {
          max = (freqObj[getArr[index]] + freqObj[getArr[index1]]);
        }
      }
    }
  }
  return max;
}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));
console.log(pickingNumbers([1, 2, 2, 3, 1, 2]));
