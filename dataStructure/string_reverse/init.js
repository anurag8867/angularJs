function reverseStringSplit(str) {
    let splittedString = str.split("");
    return splittedString.reverse().join("");
}

function reverseStringSplit2(str) {
    return [...str].reverse().join("");
}

function reverseStringFor(str) {
    let reversedString = "";
    for (let index = str.length - 1; index >= 0; index--) {
        reversedString += str[index];
    }
    return reversedString;
}

function reverseStringRecursion(str) {
    if (str === "") {
        return "";
    } else return reverseStringRecursion(str.substring(1)) + str.charAt(0);
}

console.log(reverseStringSplit2("hello"));
console.log(reverseStringSplit("hello"));
console.log(reverseStringFor("hello"));
console.log(reverseStringRecursion("hello"));