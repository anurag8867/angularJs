function centuryFromYear(year) {
    let int1 = year / 100;
    let int = Math.floor(year / 100);
    return int1 === int ? int1 : int + 1
}

console.log(centuryFromYear(1905))
console.log(centuryFromYear(1900))