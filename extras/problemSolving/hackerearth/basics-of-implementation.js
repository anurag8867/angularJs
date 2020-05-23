function main(input) {
    let obj = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
    };
    input.split('').forEach((value) => {
        obj[value] = ++obj[value];
    });
    let outputString = "";
    for (let keys in obj) {
        outputString += `${keys} ${obj[keys]}` + '\n'
    }
    return outputString;
}

console.log(main("77150"));