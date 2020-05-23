function matchingStrings(strings, queries) {
    let matchArray = [];
    queries.forEach(element => {
        let count = 0;
        strings.forEach(str => {
            if (str === element) {
                count++;
            }
        });
        matchArray.push(count);
    });
    return matchArray;
}

console.log(matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab']));