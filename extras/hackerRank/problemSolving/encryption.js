function findRows(lengthOfString) {
    let start = 1;
    while ((start * start) < lengthOfString) {
        start++;
    }
    return start;
}


function encryption(s) {

    let withoutSpace = s.replace(/ /g, '');
    let lengthOfString = withoutSpace.length;
    let cols = findRows(lengthOfString);
    let rows = cols - 1;
    if (!(cols * rows > lengthOfString)) {
        rows++;
    }
    let arrayOfString = [];
    for (let index = 0; index < rows; index++) {
        let cut = withoutSpace.slice((index * cols), ((cols * (index + 1))));
        arrayOfString.push(cut);
    }
    let outString = "";
    for (let index = 0; index < cols; index++) {
        let str = "";
        for (let index1 = 0; index1 < rows; index1++) {
            if (arrayOfString[index1][index]) {
                str += arrayOfString[index1][index]
            }
        }
        outString += str + " ";
    }

    return outString;
}
console.log(encryption("feed thedog"));
console.log(encryption("haveaniceday"));
console.log(encryption("chillout"));