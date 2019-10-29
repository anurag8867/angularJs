// Complete the workbook function below.
function workbook(n, k, arr) {
  let count = 0, page = [];
  for (let index = 1; index <= arr.length; index++) {
    while (arr[index-1]) {

      if (arr[index-1] <= 3) {
        page.push(index.toString() +" "+ arr[index-1].toString());
        arr[index-1] = 0;
      } else {
        let three = 3;
        page.push(index.toString() +" "+ three.toString());
        arr[index-1] = arr[index-1] - 3;
      }

    }
  }
  return count;
}

console.log(workbook(5, 3, [4, 2, 6, 1, 10]));
