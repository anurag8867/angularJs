// Complete the fairRations function below.
function fairRations(ar) {
    let sum = ar.reduce((accumulator, ele) => accumulator = accumulator + ele)
    if (sum % 2 !== 0) {
        return "NO"
    }
    let lastID = -1;
    let count = 0;

    for (let i = 0; i < ar.length - 1; i++) {
        if (ar[i] % 2 !== 0) {
            ar[i]++;
            ar[i + 1]++;
            count = count + 2;
        }
    }
    return count;
}

console.log(fairRations([2, 3, 4, 6, 8, 9, 10]))
console.log(fairRations([2, 3, 4, 5, 6]))

// // Complete the fairRations function below.
// function fairRations(ar) {
//     let sum = ar.reduce((accumulator, ele) => accumulator = accumulator + ele)
//     if (sum % 2 !== 0) {
//         return "NO"
//     }
//     let lastID = -1;
//     let count = 0;

//     for (let i = 0; i < ar.length; i++) {
//         if (ar[i] % 2 !== 0) {
//             if (lastID === -1) { lastID = i; }
//             else {
//                 count += Math.abs(i - lastID) * 2;
//                 lastID = -1;
//             }
//         }
//     }
//     return count;
// }
