function isPatternMatch(patt) {
    let pattern = "010";
    if (pattern !== patt) {
        return false;
    } 
    return true;
}

function beautifulBinaryString(b) {
    let tempIndex = 0, count = 0;
    for (let index = 0; index < b.length - 2; index++) {
        if (isPatternMatch(b.slice(index, index + 3))) {
            index += 2
            count += 1;
        }
    }
    return count;
}

console.log(beautifulBinaryString("0100101010"))
console.log(beautifulBinaryString("01100"))