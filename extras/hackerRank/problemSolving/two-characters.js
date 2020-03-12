function removeChar(str, char) {
    let strin = "";
    for (let index = 0; index < str.length; index++) {
        if (!(str[index] === char)) {
            strin += str[index];
        }
    }
    return strin;
}

function countfreq(str) {
    let obj = {};
    for (let index = 0; index < str.length; index++) {
        if (!obj[str[index]]) {
            obj[str[index]] = 1;
        } else {
            obj[str[index]]++;
        }
    }
    return obj;
}

function lowestFreqKey(object) {
    let key = Object.keys(object).reduce(function (r, a, i) {
        return !i || +object[a] < +object[r] ? a : r;
    }, undefined);
    return key;
}

function getObj(freq, s) {
    while (Object.keys(freq).length !== 2) {
        let key = lowestFreqKey(freq);
        s = removeChar(s, key);
        getObj(countfreq(s), s)
    }
    return s;
}

function alternate(s) {
    for (let index = 0; index < s.length - 1; index++) {
        if (s[index] === s[index + 1]) {
            let removeString = removeChar(s, s[index]);
            alternate(removeString);
        }
    }
    let freq = countfreq(s);
    let fin = alternate(getObj(freq, s));
    return 5;
}


console.log(alternate("beabeefeab"));