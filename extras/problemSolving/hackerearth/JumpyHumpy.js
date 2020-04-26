function main(input) {
    input = input.split(",");
    let buildings = input[1].split(" ");
    let stamina = 0;
    let staminaArray = [];
    for (let index = 0; index < input[0]; index++) {
        stamina = parseInt(buildings[index]);
        for (let index1 = index + 1; index1 < buildings.length; index1++) {
            if (parseInt(buildings[index1 - 1]) > parseInt(buildings[index1])) {
                break;
            }
            stamina = stamina ^ buildings[index1];
        }
        staminaArray.push(stamina);
    }
    let out = staminaArray.sort()[0];
    process.stdout.write(`${out}`);
    process.stdout.write(`${input}`);
    process.stdout.write(`${input.split(" ")}`);
    process.stdout.write(`${input.split(",")}`);
}
main("5,1 2 3 8 6")