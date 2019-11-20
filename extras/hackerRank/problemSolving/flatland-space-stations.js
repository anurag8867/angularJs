// Complete the flatlandSpaceStations function below.
function flatlandSpaceStations(n, c) {
  c = c.sort();
  let tempArray = [];
  for (let index = 0; index < n; index++) {
    let min = n;
    for (let index2 = 0; index2 < c.length; index2++) {
      if (Math.abs(index - c[index2]) < min) {
        min = Math.abs(index - c[index2]);
      }
    }
    tempArray.push(min);
  }
  return tempArray.sort()[tempArray.length-1];
}

console.log(flatlandSpaceStations(5, [0, 4]))
console.log(flatlandSpaceStations(6, [0, 1, 2, 4, 3, 5]))
