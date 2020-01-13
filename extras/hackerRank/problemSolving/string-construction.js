function check(s, substring) {
    let obj = {};
    for (let index = 0; index <= (s.length - substring.length); index += substring.length) {
        if (!obj[s.slice(index, substring.length + index)]) {
            obj[s.slice(index, substring.length + index)] = 1;
        } else {
            obj[s.slice(index, substring.length + index)]++;
        }
    }
    if (Object.keys(obj).length === 1) {
        if (substring.length * 2 > s.length) {
            return s.length;
        }
        return substring.length;
    }
    return false;
}


function stringConstruction(s) {
    for (let index = 1; index <= s.length; index++) {
        let ret = check(s, s.slice(0, index));
        if (ret) {
            return ret;
        } else {
            continue;
        }
    }
    return s.length;
}

console.log(stringConstruction("abab"));
console.log(stringConstruction("abcd"));