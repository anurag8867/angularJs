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
function main(input) {
    input = input.split(',');
    process.stdout.write(input[0] + '\n');
    process.stdout.write(input[1]);
}