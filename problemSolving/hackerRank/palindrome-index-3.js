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
            if (s[index] !== s[s.length - index - 1]) {
                let tempString = s.substring(index, s.length - index);
                if (isPalindrome(tempString.substring(1))) {
                    return index;
                } else if (isPalindrome(tempString.substring(0, tempString.length - 1))) {
                    return s.length - index - 1;
                } else {
                    return -1
                }
            }
        }
    }
    return -1;
}

console.log(palindromeIndex("aaab"));
console.log(palindromeIndex("baa"));
console.log(palindromeIndex("aaa"));