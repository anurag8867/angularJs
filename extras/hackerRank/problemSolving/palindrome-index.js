// Complete the palindromeIndex function below.
function palindromeIndex(s) {
    let palString = s.split("").reverse().join("");
    if (!s.length) {
        return -1;
    } else if (palString === s) {
        palString = s.split("").reverse().join("");
        return -1
    } else {
        for (let index = 0; index < s.length; index++) {
            let tempString = s.slice(0, index) + s.slice(index + 1, s.length);
            if (tempString === tempString.split("").reverse().join("")) {
                return index;
            }
        }
    }
    return -1;
}

console.log(palindromeIndex("aaab"));
console.log(palindromeIndex("baa"));
console.log(palindromeIndex("aaa"));