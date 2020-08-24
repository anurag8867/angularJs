// Complete the insertionSort1 function below.
function insertionSort1(n, arr) {
    

    let numberToInsert = arr[arr.length - 1], isExecuted = false;
    for (let index = arr.length - 2; index >= 0; index--) {
        if (arr[index] > numberToInsert) {
            arr[index + 1] = arr[index];
        } else {
            arr[index + 1] = numberToInsert;
            isExecuted = true;
        }
        console.log(...arr);
    }
    if (!isExecuted) {
        arr[0] = numberToInsert;
        console.log(...arr);
    }



}
console.log(insertionSort1(5, [2, 4, 6, 8, 3]));
console.log(insertionSort1(5, [2,3,4,5,6,7,8,9,10,1]));