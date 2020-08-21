function reverseString(str) {
    let revString = "";
    for (let index = str.length - 1; index >= 0; index--) {
        revString += str[index]
    }
    return revString;
}



function palindromeIndex(s) {
    let startIndex = 0, length = s.length, endIndex = length - 1;
    let miss = 0, skippedIndex = -1;
    let getLeftSideStringReversed = null;
    let leftCut = null;
    let getRightSideStringReversed = null;
    let rightCut = null;
    if (length === 0 || length === 1) {
        return -1
    } else if (length === 2) {
        if (s[0] === s[1]) return -1
    } else {
        while (endIndex > startIndex) {
            if (endIndex - startIndex > 1) {
                if (s[startIndex] !== s[endIndex]) {
                    leftCut = s.substring(startIndex + 1, endIndex+1);
                    getLeftSideStringReversed = reverseString(leftCut)
                    if (getLeftSideStringReversed === leftCut) {
                        miss++;
                        skippedIndex = startIndex;
                        startIndex++;
                    } else {
                        rightCut = s.substring(startIndex, endIndex)
                        getRightSideStringReversed = reverseString(rightCut)
                        if (rightCut === getRightSideStringReversed) {
                            miss++;
                            skippedIndex = endIndex;
                            endIndex--;
                        } else {
                            return -1;
                        }
                    }
                    if (miss > 1) return -1;
                } else {
                    startIndex++;
                    endIndex--;
                }
            } else {
                return skippedIndex;
            }
        }
        return skippedIndex;
    }
}

console.log(palindromeIndex("iynilxchelphhsjiftgmbtaxlnbrbhsrptfxfddmhoerxaaaaxreohmddfxftprshbrbnlxatbmgtfishhplehcxlinyi"));
console.log(palindromeIndex("aaab"));
console.log(palindromeIndex("baa"));
console.log(palindromeIndex("aaa"));