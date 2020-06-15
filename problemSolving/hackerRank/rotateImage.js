function rotateImage(ar) {
    let outputArray = [], subArray = [];
    for (let index = 0; index < ar.length; index++) {
        subArray = [];
        for (let subIndex = ar.length-1; subIndex >= 0; subIndex--) {
            subArray.push(ar[subIndex][index]);
        }
        outputArray.push(subArray);
    }
    return outputArray;
}


console.log(rotateImage([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))