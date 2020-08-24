function pyramid(row = 5) {
    let out = "";
    let output = "";
    for (let index = 0; index < row; index++) {
        output = "";
        let space = Math.abs(index - 2);
        for (; space > 0; space--) {
            output += " ";
        }
        for (let star = row - (Math.abs(index - 2) * 2); star > 0; star--) {
            if (star % 2 === 0) {
                output += " ";
            } else {
                output += "*";
            }
        }
        out += output + '\n'
    }
    return out;
}

console.log(pyramid());
console.log(name);