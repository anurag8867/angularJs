function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}

function palindromeIndex(s) {
    if (!s.length) {
        return -1;
    } else if (isPalindrome(s)) {
        return -1;
    } else {
        for (let index = 0; index < s.length; index++) {
            let tempString = s.slice(0, index) + s.slice(index + 1, s.length);
            if (isPalindrome(tempString)) {
                return index;
            }
        }
    }
    return -1;
}

console.log(palindromeIndex("aaab"));
console.log(palindromeIndex("baa"));
console.log(palindromeIndex("aaa"));