process.stdin.on("end", function () {
    stdin_input = stdin_input.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));
    main(stdin_input.toString());
});

function main(input) {
    let leftArray = input.slice(1, parseInt(input[0]) + 1);
    let rightArray = input.slice(parseInt(input[0]) + 1);
    let output = "";
    leftArray.forEach((value, index, array) => {
        output += `${value + rightArray[index]} `
    });
    process.stdout.write(`${output}`);
    Array.isArray()
}

main([5, 1, 2, 3, 4, 5, 4, 5, 3, 2, 10])