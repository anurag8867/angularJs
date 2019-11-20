function hourglassSum(arr) {
  let array = [];
  let arrIndex = 0;
  for (var i = 0; i < 6; i++) {
    array[i] = [];
  }
  for (let r = 0; r < 6; r++) {
    for (let c = 0; c < 6; c++) {
      array[r][c] = arr[arrIndex++];
    }
  }
  let sumArray = [];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      sumArray.push(array[r][c] + array[r][c + 1] + array[r][c + 2] + array[r + 1][c + 1]
          + array[r + 2][c] + array[r + 2][c + 1] + array[r + 2][c + 2]);
    }
  }
  let sortedSumArray = sumArray.sort(function (a, b) {
    return b - a
  });
  return sortedSumArray[0];
}

console.log(hourglassSum([1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,2,4,4,0,0,0,0,2,0,0,0,0,1,2,4,0]))
