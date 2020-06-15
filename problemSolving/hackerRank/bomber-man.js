function isZero(ar, row, col) {
    if (ar[row][col] === "O") return false;
    if ((ar[row + 1] === undefined ? true : ar[row + 1][col] === ".")
        && (ar[row - 1] === undefined ? true : ar[row - 1][col] === ".") &&
        (ar[row][col + 1] === undefined ? true : ar[row][col + 1] === ".")
        && (ar[row][col - 1] === undefined ? true : ar[row][col - 1] === ".")) {
        return true;
    }
    return false;
}

function run(grid) {
    let outputArray = [];
    for (let row = 0; row < grid.length; row++) {
        outputArray[row] = [];
        for (let col = 0; col < grid[row].length; col++) {
            outputArray[row][col] = isZero(grid, row, col) ? "O" : '.';
        }
    }
    return outputArray;
}
function procced(time, grid) {
    let output = grid;
    let turns = time / 3;
    while (turns--) {
        output = run(output);
    }
    return output;
}

function bomberMan(time, ar) {
    let grid = [];
    ar.forEach((value, index, array) => {
        grid[index] = value.split('');
    });
    let out = procced(time, grid);
    let restructure = [], str = "";

    out.forEach((value, index, array) => {
        value.forEach((val, ind, arr) => {
            str += val;
        });
        restructure.push(str);
        str = "";
    });
    return restructure;
}


console.log(bomberMan(3, [
    ".......",
    "...O...",
    "....O..",
    ".......",
    "OO.....",
    "OO....."
]));

// console.log(bomberMan(3, [
//     ['.', '.', '.', '.', '.', '.', '.'],
//     ['.', '.', '.', 0, '.', '.', '.'],
//     ['.', '.', '.', '.', 0, '.', '.'],
//     ['.', '.', '.', '.', '.', '.', '.'],
//     [0, 0, '.', '.', '.', '.', '.'],
//     [0, 0, '.', '.', '.', '.', '.']
// ]))