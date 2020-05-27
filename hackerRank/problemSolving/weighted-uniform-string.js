function getSum(s) {
    let sum = 0;
    let char = s[s.length - 1];
    for (let index = s.length - 1; index >= 0; index--) {
        if (char === s[index]) {
            sum += s.charCodeAt(index) - 96;
        } else {
            break;
        }
    }
    return sum;
}



function weightedUniformStrings(s, queries) {
    let weights = [];
    for (let index = 0; index < s.length; index++) {
        weights.push(getSum(s.slice(0, index + 1)));
    }
    let ans = [];
    for (let index = 0; index < queries.length; index++) {
        if (weights.includes(queries[index])) {
            ans.push("Yes");
        } else {
            ans.push("No");
        }
    }
    return ans;
}

console.log(weightedUniformStrings("abccddde", [1, 3, 12, 5, 9, 10]));
// console.log(weightedUniformStrings("aaabbbbcccddd", [5,
//     9,
//     7,
//     8,
//     12,
//     5]));