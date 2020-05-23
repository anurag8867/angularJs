function main(input) {
    input = input.split(',');

    input.forEach((value, index, array) => {
        input[index] = input[index].split(' ');
    });
    input = input.slice(1);
    let output = "";
    input.forEach((value, index, array) => {
        let leftIndex = input[index][1];
        let rightIndex = input[index][2];
        let leftString = input[index][0].substring(0, leftIndex);
        let rightString = input[index][0].substring(parseInt(rightIndex) + 1);
        let stringToManipulate = input[index][0].substring(parseInt(leftIndex), parseInt(rightIndex) + 1);
        let keyCodeArray = [];
        stringToManipulate.split("").forEach((value, index, array) => {
            keyCodeArray.push(value.charCodeAt(0));
        });
        let sortedKeyCode = keyCodeArray.sort((a, b) => b - a);
        let sortedString = ""
        sortedKeyCode.forEach((value) => {
            sortedString += `${String.fromCharCode(value)}`;
        })
        output += `${leftString}${sortedString}${rightString} \n`;
    });
    process.stdout.write(`${output}`);
}
main("2,ooneefspd 0 8,effort 1 4")