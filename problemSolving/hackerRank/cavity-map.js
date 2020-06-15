// Complete the cavityMap function below.
function cavityMap(grid) {

    for (let index = 1; index < grid.length - 1; index++) {
        for (let ind = 1; ind < grid[index].length - 1; ind++) {
            if (grid[index][ind] && grid[index][ind + 1] && grid[index][ind - 1] &&
                Number(grid[index][ind]) && Number(grid[index][ind - 1]) && Number(grid[index][ind]) &&
                (Number(grid[index][ind - 1]) < Number(grid[index][ind])) &&
                (Number(grid[index][ind + 1]) < Number(grid[index][ind])) &&
                (Number(grid[index - 1][ind]) < Number(grid[index][ind])) &&
                (Number(grid[index + 1][ind]) < Number(grid[index][ind]))
            ) {
                grid[index] = grid[index].substring(0, ind) + 'X' + grid[index].substring(ind + 1);
                ind++;
            }
        }
    }
    return grid;
}

console.log(cavityMap([
    "989",
    "191",
    "111",
])); console.log(cavityMap([
    "1112",
    "1912",
    "1892",
    "1234"
]));