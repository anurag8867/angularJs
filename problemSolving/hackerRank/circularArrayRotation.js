// Complete the circularArrayRotation function below.
function circularArrayRotation(a, k, queries) {
  let tempArray = [];
  // for (let index = 0; index< queries.length; index++) {
  //   let ind = a.length % k + queries[index];
  //   if(ind >= a.length) {
  //     ind = ind % a.length;
  //   }
  //   tempArray.push(a[ind]);
  // }
  for (let index = 0; index< queries.length; index++) {
    tempArray.push(a[(a.length - (k % a.length) + queries[index]) % a.length]);
  }
//  a[(n - (k % n)+ m) % n]
return tempArray;
}
console.log(circularArrayRotation([1, 2, 3], 2, [0, 1, 2]));
console.log(circularArrayRotation([3, 4, 5], 2, [1, 2]));
