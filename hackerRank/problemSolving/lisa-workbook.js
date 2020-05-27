// Complete the workbook function below.
function workbook(n, k, arr) {
  let specialProblems = 0, pagesCount = 0;
  for (let index = 0; index < arr.length; index++) {
    pagesCount += Math.ceil(arr[index] / k);
  }
  return pagesCount;
}

console.log(workbook(5, 3, [4, 2, 6, 1, 10]));



































// let count = 0, page = [];
// for (let index = 1; index <= arr.length; index++) {
//   while (arr[index-1]) {

//     if (arr[index-1] <= 3) {
//       page.push(index.toString() +" "+ arr[index-1].toString());
//       arr[index-1] = 0;
//     } else {
//       let three = 3;
//       page.push(index.toString() +" "+ three.toString());
//       arr[index-1] = arr[index-1] - 3;
//     }

//   }
// }
// return count;