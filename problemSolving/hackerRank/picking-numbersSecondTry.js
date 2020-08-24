function pickingNumbers(a) {
  a = a.sort();
  // [1, 1, 2, 2, 2, 3]
  let numbersPicked = 0, tempArray = [];
  for (let index = 0; index < a.length - 1; index++) {
    let count = 1;
    for (let index2 = index + 1; index2 < a.length; index2++) {
      if (Math.abs(a[index] - a[index2]) === 0 || Math.abs(a[index] - a[index2]) === 1) {
        count++
      } else {
        break;
      }
    }
    tempArray.push(count);
  }
  return tempArray.sort()[tempArray.length-1];
}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));
console.log(pickingNumbers([1, 2, 2, 3, 1, 2]));
