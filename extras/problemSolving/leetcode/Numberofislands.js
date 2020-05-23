function Numberofislands(array) {
    let island = 0;
    for (let row = 0; row < array.length; row++) {
        for (let col = 0; col < array[row].length; col++) {
            if (array[row][col] === 1) {
                array[row][col] = 2;
                island++;
                if ((array[row][col - 1] && array[row][col - 1] === 2)
                    || (array[row - 1] && array[row - 1][col] && array[row - 1][col] === 2)
                    || (array[row + 1] && array[row + 1][col] && array[row + 1][col] === 2)
                    || (array[row][col + 1] && array[row][col + 1] === 2)) {
                    island--;
                }
            }
        }
    }
    return island;
}
console.log(Numberofislands([[1, 1, 0, 0, 0], [1, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 1]]));