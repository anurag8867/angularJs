
function commonChild(s1, s2) {
    let matched = 0, matchedIndex = 0;
    for (let index = 0; index < s1.length; index++) {
        for (let index2 = matchedIndex; index2 < s2.length; index2++) {
            if (s1[index] === s2[index2]) {
                matched++;
                matchedIndex = index2 + 1;
                break;
            }
        }
    }
    return matched;
}


console.log(commonChild("ABCDEF", "FBDAMN"));
console.log(commonChild("SHINCHAN", "NOHARAAA"));
console.log(commonChild("ABCD", "ABDC"));
console.log(commonChild("HARRY", "SALLY"));
console.log(commonChild("AA", "BB"));
// console.log(commonChild("SHINCHAN", "NOHARAAA"));
// console.log(commonChild("WEWOUCUIDGCGTRMEZEPXZFEJWISRSBBSYXAYDFEJJDLEBVHHKS", "FDAGCXGKCTKWNECHMRXZWMLRYUCOCZHJRRJBOAJOQJZZVUYXIC"));
// console.log(commonChild("ABCDEF", "FBDAMN"));
// console.log(commonChild("AA", "BB"));
// console.log(commonChild("HARRY", "SALLY"));
