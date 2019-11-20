function beautifulTriplets(d, arr) {
  // let count = 0;
  //
  // for (let i = 0; i < arr.length - d; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     for (let k = j + 1; k < arr.length; k++) {
  //       if ((arr[j] - arr[i] === arr[k] - arr[j]) && (arr[k] - arr[j] === d)) {
  //         count++;
  //       }
  //     }
  //   }
  // }
  //
  // return count;

  let counts = {};
  arr.forEach(x => counts[x] = counts[x] + 1 || 1);
  return arr.reduce((c, v) => {
    let a = counts[v - d] * counts[v + d];
    return c + (isNaN(a) ? 0 : a);
  },0);
}

console.log(beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10]));
