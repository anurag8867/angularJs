function split(str) {
    let split = str.split("");
    let obj = {};
    split.forEach((value) => {
        if (!obj[value]) {
            obj[value] = 1;
        } else {
            obj[value] = obj[value] + 1;
        }
    })
    let count = 0;
    for (let key in obj) {
        if (obj[key] === 1) count++;
    }
    return count;
}



function SearchLetter(input1, input2) {
    if (!(~input1.indexOf(input2) || ~input1.lastIndexOf(input2))) return -1;
    let index = input1.indexOf(input2)
    let lastIndex = input1.lastIndexOf(input2);
    return split(input1.substring(index, ++lastIndex))
}

console.log(SearchLetter("the capital of minnesota is saint paul", 'y'))
console.log(SearchLetter("my name is granar", 'a'))