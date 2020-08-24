function doDeletion(str) {
    let half = Math.floor(str.length / 2)
    let left = null
    let right = null
    if (half % 2 === 0) {
        left = half - 1
        right = half
        if (!(str[left] === str[right])) return str;
    } else {
        left = half - 1
        right = half + 1
        if (!(str[half] === str[left] || str[half] === str[right])) return str;
    }
    let start = null;
    let end = null;
    while (str[half] === str[left]) {
        start = left
        left--;
    }
    while (str[half] === str[right]) {
        end = right
        right++;
    }

    return doDeletion(str.substring(0, start) + str.substring(end + 1))
}

function sort(str) {
    let half = Math.floor(str.length / 2);
    let left = str.substring(0, half);
    let right = str.substring(half);
    let newString = right + left;
    return doDeletion(newString);
}

console.log(sort("aabcccabba"));