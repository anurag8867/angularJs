function main2(input) {
    let splittedInput = input.split('\n');
    let tests = splittedInput[0];
    let ranges = splittedInput[1].split(' ');

    let ar = [];
    for (let test = 0; test < tests; test++) {
        for (let index = 1; index <= ranges[test]; index++) {
            if (index % 3 === 0 && index % 5 === 0) {
                ar.push("FizzBuzz")
            } else if (index % 3 === 0) {
                ar.push("Fizz")
            } else if (index % 5 === 0) {
                ar.push("Buzz")
            } else {
                ar.push(index)
            }
        }
    }
    return ar;     // Writing output to STDOUT
}