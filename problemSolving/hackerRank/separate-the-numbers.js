function separateNumbers(s) {
    let currentNumber = s[0], nextNumber = null, nextIndex = null, firstNumber = -1, matched = null;
    if (s.length === 0 || s.length === 1) return 'NO';
    for (let index = 0; index < s.length - 1;) {
        nextNumber = parseInt(currentNumber) + 1;
        nextIndex = String(nextNumber).length + index
        if (nextIndex < s.length) {
            if (nextNumber === parseInt(s.substring(index + 1, nextIndex + 1))) {
                matched = true
                if (firstNumber === -1) firstNumber = currentNumber
                currentNumber = nextNumber;
                index = nextIndex
            } else {
                matched = false
                currentNumber = parseInt(`${currentNumber}${s[index + 1]}`);
                index++;
            }
        } else {
            return 'NO'
        }
    }
    return matched ? `YES ${firstNumber}` : 'NO'
}

console.log(separateNumbers("45035996273704964503599627370497"))
console.log(separateNumbers("22517998136852482251799813685249"))
console.log(separateNumbers("99910001001"))
console.log(separateNumbers("7891011"))
console.log(separateNumbers("9899100"))
console.log(separateNumbers("999100010001"))
console.log(separateNumbers("91011"))
console.log(separateNumbers("13"))
console.log(separateNumbers("99100"))
console.log(separateNumbers("1234"))
console.log(separateNumbers("101103"))
console.log(separateNumbers("010203"))
console.log(separateNumbers("1"))