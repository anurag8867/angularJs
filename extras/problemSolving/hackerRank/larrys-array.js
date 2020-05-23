function findSmallest(array) {
    let small = array[0];
    for (let index = 0; index < array.length; index++) {
        if (small > array[index]) small = array[index];
    }
    return small;
}
function rearrange(array) {
    let smallest = findSmallest(array);
    while (array[0] !== smallest) {
        let leftArray = array.slice(1);
        let rightArray = array.slice(0, 1);
        array = [...leftArray, ...rightArray];
    }
    return array;
}

function isSorted(array) {
    for (let index = 0; index < array.length - 1; index++) {
        if (array[index] > array[index + 1]) {
            return false;
        }
    }
    return true;
}


function larrysArray(array) {
    if (array.length === 3) {
        if (isSorted(array)) {
            return "YES";
        } else {
            let ops = 0;
            while (!isSorted(array) && ops < 2) {
                ops++;
                let ar = rearrange(array);
                array = ar;
            }
            return "YES";
        }
    } else {
        for (let index = 0; index < array.length; index++) {
            if (array[index] === (index + 1)) {
                continue;
            } else {
                let ar = rearrange(array.slice(index, (index + 3)));
                array = ar;
            }
        }

    }

}
// console.log(larrysArray([3, 1, 2]));
console.log(larrysArray([1, 3, 4, 2]));
// console.log(larrysArray([1, 2, 3, 5, 4]));