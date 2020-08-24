function getArr(arr) {

  if (arr[index] - arr[index + 1] <= 1) {
    tempArray.push(arr[index]);
    count++;
  }
}

function pickingNumbers(a) {
  let arr = a.sort((a, b) => a - b);
  let nextIndex = null;
  let count = 0;
  let tempArray = [];
  for (let index = 0; index < arr.length - 1; index++) {
    count = getArr(arr);
    if (count < tempArray.length) count = tempArray.length;
  }
}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));
console.log(pickingNumbers([1, 2, 2, 3, 1, 2]));
