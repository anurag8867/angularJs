/*
// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    process.stdout.write("Hi, " + input + ".\n");       // Writing output to STDOUT
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail
*/

// Write your code here
process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
    stdin_input = stdin_input.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));
    main(stdin_input.toString());
});

function main(inp) {
    let output = "";
    let input = inp.split(",");
    let length = input[0];
    let arra = input[1].split(" ");
    for (let index = 0; index < length; index++) {
        for (let index2 = 1; index2 <= arra[index]; index2++) {
            let out = index2;
            if ((index2 % 3 === 0) && (index2 % 5 === 0)) {
                out = "FizzBuzz";
            } else if (index2 % 3 === 0) {
                out = "Fizz";
            } else if (index2 % 5 === 0) {
                out = "Buzz";
            }
            output += `${out}\n`
        }
    }
    process.stdout.write(`${input}`);
}
