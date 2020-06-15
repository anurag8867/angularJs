function remove(s1, s2) {
    let str = "";
    for (let index = 0; index < s1.length; index++) {
        if (s2.indexOf(s1[index]) >= 0) {
            str += s1[index];
        }
    }
    return str;
}

function match(s1, s2, index, matched) {
    let ind = -1;
    for (let index = 0; index < s1.length; index++) {
        let indexFind = s2.indexOf(s1[index]);
        if (indexFind > ind) {
            ind = indexFind;
            matched += s2[indexFind];
        } 
    }
    return matched;
}

function commonChild(s1, s2) {
    let matched = 0;
    s1 = remove(s1, s2);
    s2 = remove(s2, s1);
    for (let index = 0; index < s1.length; index++) {
        let ret = match(s1.substring(index), s2, index, "");
        if (ret.length > matched) {
            matched = ret.length;
        }
    }
    return matched;
}

console.log(commonChild("WEWOUCUIDGCGTRMEZEPXZFEJWISRSBBSYXAYDFEJJDLEBVHHKS", "FDAGCXGKCTKWNECHMRXZWMLRYUCOCZHJRRJBOAJOQJZZVUYXIC"));
// console.log(commonChild("ABCDEF", "FBDAMN"));
// console.log(commonChild("SHINCHAN", "NOHARAAA"));
// console.log(commonChild("AA", "BB"));
// console.log(commonChild("HARRY", "SALLY"));






// function commonChild(s1, s2, matches) {

//     for (let index = 0; index < s1.length; index++) {
//         let char = s1[index];
//         let ind = s2.indexOf(char);
//         if (ind < 0) {
//             commonChild(s1.substring(++index), s2, matches);
//         } else {
//             matches += s1[index];
//             commonChild(s1.substring(++index), s2.substring(++ind), matches)
//         }
//     }
//     return matches.length;
// }
