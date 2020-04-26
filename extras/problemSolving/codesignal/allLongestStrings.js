function allLongestStrings(inputArray) {
    let obj = {};
    let size = inputArray[0].length;
    inputArray.forEach((element, index) => {
        let len = element.length;
        if (!obj[len]) {
            obj[len] = [];
        }
        obj[len].push(element);
        if (len > size) size = len;
    });

    return obj[size];
}

console.log(allLongestStrings(["aa"]))
console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]))
