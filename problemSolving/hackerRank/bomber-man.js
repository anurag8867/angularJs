//https://www.hackerrank.com/challenges/bomber-man/problem
function detonate(array, times) {
    times--;
    let ar = [], str = "";
    for (let index = 0; index < array.length; index++) {
        for (let index2 = 0; index2 < array[index].length; index2++) {
            if ((array[index] && array[index][index2] === "O") ||
                (array[index - 1] && array[index - 1][index2] === "O") ||
                (array[index + 1] && array[index + 1][index2] === "O") ||
                (array[index] && array[index][index2 - 1] === "O") ||
                (array[index] && array[index][index2 + 1] === "O")
            ) {
                str += "."
            } else {
                str += "0"
            }
        }
        ar.push(str);
        str = "";
    }
    if (times) {
        return detonate(ar);
    }
    return ar;
}

function getEven(array) {
    let str = "", ar = [];
    let arrayLength = array.length;
    let lineLength = array[0].length;
    for (let index = 0; index < lineLength; index++) {
        str += "1";
    }
    for (let index = 0; index < arrayLength; index++) {
        ar.push(str);
    }
    return ar;
}

function bomberMan(time, ar) {
    let grid = [];
    if (time === 1) {
        return ar;
    } else if (time % 2 === 0) {
        return getEven(ar);
    } else {
        let times = Math.floor(time / 2);
        return detonate(ar, times)
    }
}

console.log(bomberMan(3, [
    ".......",
    "...O...",
    "....O..",
    ".......",
    "OO.....",
    "OO....."
]));
console.log(bomberMan(5, [
    ".......",
    "...O...",
    "....O..",
    ".......",
    "OO.....",
    "OO....."
]));

console.log(bomberMan(5, [
    ".......",
    "...O.O.",
    "....O..",
    "..O....",
    "OO...OO",
    "OO.O..."
]));


// console.log(bomberMan(3, [
//     ['.', '.', '.', '.', '.', '.', '.'],
//     ['.', '.', '.', 0, '.', '.', '.'],
//     ['.', '.', '.', '.', 0, '.', '.'],
//     ['.', '.', '.', '.', '.', '.', '.'],
//     [0, 0, '.', '.', '.', '.', '.'],
//     [0, 0, '.', '.', '.', '.', '.']
// ]))