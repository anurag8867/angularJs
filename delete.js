
function convert(str) {
    str = str.replace("_", " ");
    let string = "";
    let split = str.split(" ");
    split.forEach(function (value) {
        string += value[0].toUpperCase() + value.substring(1) + " ";
    });
    return string.substring(0, string.length - 1);
}

console.log(convert("random_verification"))