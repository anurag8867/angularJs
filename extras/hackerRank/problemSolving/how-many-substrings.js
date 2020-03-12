function count(str) {
    let obj = {}, count = 0;
    let subsubstring = function (s, ind) {
        for (let index = 0; index <= s.length - ind; index++) {
            let char = s.slice(index, index + ind);
            if (!obj[char]) {
                obj[char] = 1;
                count++;
            }
        }
    };

    for (let index = 1; index <= str.length; index++) {
        subsubstring(str, index);
    }
    return count;
}


function countSubstrings(s, queries) {
    let ar = [];

    queries.forEach(function (query, index, array) {
        if (((query[0] - query[1]) === 1) || ((query[0] - query[1]) === 0)) {
            ar.push(1);
        } else {
            ar.push(count(s.slice(query[0], query[1] + 1)));
        }
    });

    // for (let index = 0; index < queries.length; index++) {
    //     if (((queries[index][0] - queries[index][1]) === 1) || ((queries[index][0] - queries[index][1]) === 0)) {
    //         ar.push(1);
    //     } else {
    //         ar.push(count(s.slice(queries[index][0], queries[index][1] + 1)));
    //     }
    // }
    return ar;
}
console.log(countSubstrings("aabaa", [[1, 4]]))
// console.log(countSubstrings("aabaa", [[1, 1], [1, 4], [1, 1], [1, 4], [0, 2]]))