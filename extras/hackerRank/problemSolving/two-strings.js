// Complete the twoStrings function below.
function twoStrings(s1, s2) {
    let s1L = s1.slice(0, s1.length / 2);
    let s1R = s1.slice(s1.length / 2);
    let s2L = s2.slice(0, s2.length / 2);
    let s2R = s2.slice(s2.length / 2);

    for (let index = 0; index < s1L.length; index++) {
        for (let index1 = 0; index1 < s2L.length; index1++) {
            if (s1L[index] === s2L[index1]) {
                return "YES";
            }
        }
    } for (let index = 0; index < s1L.length; index++) {
        for (let index1 = 0; index1 < s2R.length; index1++) {
            if (s1L[index] === s2R[index1]) {
                return "YES";
            }
        }
    }
    for (let index = 0; index < s1R.length; index++) {
        for (let index1 = 0; index1 < s2L.length; index1++) {
            if (s1R[index] === s2L[index1]) {
                return "YES";
            }
        }
    } for (let index = 0; index < s1R.length; index++) {
        for (let index1 = 0; index1 < s2R.length; index1++) {
            if (s1R[index] === s2R[index1]) {
                return "YES";
            }
        }
    }
    return "NO"
}

console.log(twoStrings("hello", "world"));
console.log(twoStrings("hi", "world"));