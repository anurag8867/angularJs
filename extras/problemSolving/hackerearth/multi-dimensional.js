process.stdin.on("end", function () {
    stdin_input = stdin_input.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));
    main(stdin_input.toString());
});
function main(input) {
    input = input.split(',');
    input.forEach((value, index, array) => {
        input[index] = input[index].split(' ');
    })
    let rows = input[0][0]; //3
    let columns = input[0][1]; //5
    input = input.slice(1);
    let outputString = "";
    for (let index = 0; index < columns; index++) {
        let ar = [];
        for (let index1 = 0; index1 < rows; index1++) {
            outputString += `${input[index1][index]} `
        }
        outputString += `\n`;
    }
    process.stdout.write(`${outputString}`);         // Writing output to STDOUT
}


main("3 5,13 4 8 14 1,9 6 3 7 21,5 12 17 9 3")