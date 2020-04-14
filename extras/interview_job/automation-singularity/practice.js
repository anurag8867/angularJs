// let output = `0 => ${input[0].toString()} 1 => ${input[1].toString()} 2 => ${input[2].toString()} 3 => ${input[3].toString()} 4 => ${input[4].toString()} 5 => ${input[5].toString()}`;


function main(input) {
    let arra = input.split(" ")
    for (let index = 0; index < arra[0]; index++) {
        for (let index2 = 1; index2 <= arra[index + 1]; index2++) {
            let output = index2;
            if (index2 % 3 === 0) {
                output = "Fizz";
            } else if (index2 % 5 === 0) {
                output = "Buzz";
            } else if ((index2 % 3 === 0) && (index2 % 5 === 0)) {
                output = "FizzBuzz";
            }
            console.log(output.toString())
        }
    }
}
main('2 3 15')