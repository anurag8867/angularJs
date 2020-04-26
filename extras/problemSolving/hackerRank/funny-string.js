function findChar(s) {
    let ar = [];
    for (let index = 0; index < s.length; index++) {
        ar.push(s.charCodeAt(index));
    }
    return ar;
}

function findDiff(ar) {
    let res = [];
    for (let index = 1; index < ar.length; index++) {
        res.push(Math.abs(ar[index - 1] - ar[index]));
    }
    return res;
}


function funnyString(s) {
    let revString = s.split("").reverse().join("");
    let ar = findChar(s);
    let arRev = findChar(revString);
    let arDif = findDiff(ar);
    let arDifRev = findDiff(arRev);
    if(JSON.stringify(arDif) === JSON.stringify(arDifRev)) {
        return "Funny"
    }
    return "Not Funny";
}

console.log(funnyString("acxz"));
console.log(funnyString("bcxz"));