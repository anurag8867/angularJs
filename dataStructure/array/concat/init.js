/**
 * returns a shallow copy that contains copies of the same elements combined from the original arrays
 */
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat();
array1[0] = "sdfghgfd"
console.log(array1);
console.log(array3);

const letters = ['a', 'b', 'c'];

const alphaNumeric = letters.concat(1, 2, [2, 3]);

console.log(alphaNumeric);

const num1 = [[1]];
const num2 = [2, [3]];

const numbers = num1.concat(num2);

console.log(numbers);
// results in [[1], 2, [3]]

// modify the first element of num1
num1[0].push(4);

console.log(num1);
console.log(numbers);
// results in [[1, 4], 2, [3]]