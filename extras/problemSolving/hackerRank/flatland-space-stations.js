// Complete the flatlandSpaceStations function below.
function flatlandSpaceStations(n, c) {
  c = c.sort();
  let dist = 0;
  let ar = [];
  for (let index = 0; index < n; index++) {
    dist = null;
    for (let index2 = 0; index2 < c.length; index2++) {
      if (!dist && !(dist === 0)) {
        dist = Math.max(dist, Math.abs(index - c[index2]));
      } else {
        dist = Math.min(dist, Math.abs(index - c[index2]));
      }
    }
    ar.push(dist)
  }
  return ar.sort((a, b) => b - a)[0];
}

console.log(flatlandSpaceStations(5, [0, 4]))
console.log(flatlandSpaceStations(6, [0, 1, 2, 4, 3, 5]))
