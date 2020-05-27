function isPlalindrome(s) {
    for (let index = 0; index < s.length; index++) {
        if (s[index] !== s[s.length - 1 - index]) {
            return false;
        }
    }
    return true;
}

function substrCount(s) {
    let palin = [];
    for (let index = 0; index < s.length; index++) {
        for (let index1 = index + 1; index1 < s.length - 1; index1++) {
            let substr = s.substring(index, index1);
            if (substr.length > 1) {
                if (isPlalindrome(substr)) {
                    palin.push(substr.length);
                }
            }
        }
    }
    return palin.sort(function (a, b) {
        return b - a;
    })[0];
}

function rotateString(s, k) {
    return s.substring(k) + s.substring(0, k)
}

function circularPalindromes(s) {
    let output = [];
    for (let index = 0; index < s.length; index++) {
        output.push(substrCount(rotateString(s, index)));
    }
    return output;
}

console.log(circularPalindromes("eededdeedede"));
console.log(circularPalindromes("cacbbba"));