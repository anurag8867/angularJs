function keyPair(str) {
    let obj = {};
    for (let index = 0; index < str.length; index++) {
        if (!obj[str[index]]) {
            obj[str[index]] = 1
        } else {
            obj[str[index]]++;
        }
    }
    return obj;
}

function findCount(s1, s2) {
    let count = 0;
    for (let s1Key in s1) {
        let isExist = false;
        for (let s2Key in s2) {
            if (s1Key === s2Key) {
                if ((s1[s1Key] - s2[s2Key]) > 0) {
                    count += s1[s1Key] - s2[s2Key];
                }
                isExist = true;
                break;
            }
        }
        if (!isExist) {
            count++;
        }
    }
    return count;
}

function anagram(s) {
    if (!s.length || s.length % 2 !== 0) {
        return -1;
    } else {
        let s1 = keyPair(s.slice(0, s.length / 2));
        let s2 = keyPair(s.slice(s.length / 2));
        if (Object.keys(s1).length > Object.keys(s2).length) {
            return findCount(s1, s2);
        } else {
            return findCount(s2, s1);
        }
    }
}

console.log(anagram("aaabbb"));
console.log(anagram("fdhlvosfpafhalll"));
console.log(anagram("asdfjoieufoa"));
console.log(anagram("mvdalvkiopaufl"));





// console.log(anagram("aaabbb"));
// console.log(anagram("ab"));
// console.log(anagram("abc"));
// console.log(anagram("mnop"));
// console.log(anagram("xyyx"));
// console.log(anagram("xaxbbbxx"));