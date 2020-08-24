function marsExploration(s) {
    let msg = "SOS", count = 0;
    for (let index = 0; index < s.length; index++) {
        if (!(s[index] === msg[index % 3])) {
            count++;
        }
    }
    return count;
}

console.log(marsExploration("SOSSPSSQSSOR"))