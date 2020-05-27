function bigSorting(unsorted) {
    return unsorted.sort(function (a, b) {
        return a - b;
    });

    
}

console.log(bigSorting([31415926535897932384626433832795,
    1,
    3,
    10,
    3,
    5,
]))