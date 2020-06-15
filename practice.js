// Write a function to reverse individual words of a string.
// Eg: "HELLO WORLD" => "OLLEH DLROW"
// Catch: Do not use any inbuilt JS functions like slice, splice, split, reverse etc.


function rev(string) {
    let reversedString = "";
    let ar = [], word = "";
    for (let index = 0; index < string.length; index++) {
        if (string[index] !== ' ' && string.length - 1 !== index) {
            word += string[index];
        } else if (string.length - 1 === index) {
            word += string[index];
            ar.push(word);
        } else {
            ar.push(word);
            word = "";
        }
    }
    ar.forEach((value, index, array) => {
        reversedString += reverseString(value);
        if (array.length - index > 1) {
            reversedString += " ";
        }
    })
    return reversedString;
}

function reverseString(string) {
    let str = "";
    for (let index = string.length - 1; index >= 0; index--) {
        str += string[index];
    }
    return str;
}
console.log(rev("HELLO WORLD Anurag"));olleh
console.log(rev("HELLO WORLD"));