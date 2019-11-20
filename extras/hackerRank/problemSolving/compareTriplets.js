function compareTriplets(a, b) {
  let ar = [0, 0];
  let le = a.length;
  for (let index = 0; index < le; index++) {
    if (a[index] > b[index]) {
      ar[0]++;
    } else if (a[index] < b[index]) {
      ar[1]++;
    }
  }
  return ar;
}

console.log(compareTriplets([5, 6, 7], [3, 6, 10]));
