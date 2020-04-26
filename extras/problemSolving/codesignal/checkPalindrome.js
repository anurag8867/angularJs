function checkPalindrome(inputString) {
    let pal = "";
    for (let index = inputString.length - 1; index >= 0; index--) {
        pal += inputString[index];
    }
    return pal === inputString ? true : false;
}

console.log(checkPalindrome("aabaa"));
console.log(checkPalindrome("abac"));