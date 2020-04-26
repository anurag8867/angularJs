function main(input) {
    input = input.split(',');
    input = input.slice(1);
    let rev = "";
    for (let index = input.length - 1; index >= 0; index--) {
        rev += input[index] + '\n';
    }
    process.stdout.write(`${rev}`);       // Writing output to STDOUT
}

main("5, 4, 12, 7, 15, 9")