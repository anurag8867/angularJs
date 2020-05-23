function biggerIsGreater(str) {
    let charCode = [];
    for (let index = 0; index < str.length; index++) {
        charCode.push(str.charCodeAt(index) - 97);
    }
    return charCode;
}

console.log(biggerIsGreater("abdc"));