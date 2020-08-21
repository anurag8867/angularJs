function longestCommonSequence(s1, s2) {
    let max1 = '', max2 = '';

    let ind = 0;
    for (let index = 0; index < s1.length; index++) {
        for (let index1 = ind; index1 < s2.length; index1++) {
            if (s1[index] === s2[index1]) {
                max1 += s2[index1];
                ind = index1 + 1;
                break;
            }
        }
    }
    ind = 0;

    for (let index = 0; index < s2.length; index++) {
        for (let index1 = ind; index1 < s1.length; index1++) {
            if (s1[index1] === s2[index]) {
                max2 += s1[index1];
                ind = index1 + 1;
                break;
            }
        }
    }

    return (max1.length > max2.length) ? max1.length : max2.length;
}

console.log(longestCommonSequence("WEWOUCUIDGCGTRMEZEPXZFEJWISRSBBSYXAYDFEJJDLEBVHHKS", "FDAGCXGKCTKWNECHMRXZWMLRYUCOCZHJRRJBOAJOQJZZVUYXIC"));
console.log(longestCommonSequence("SHINCHAN", "NOHARAAA"));