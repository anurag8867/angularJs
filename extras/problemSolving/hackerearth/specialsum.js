function main(input) {
    input = input.split(",");
    let buildings = input[1].split(" ");
    while (buildings.length > 1) {
        for (let index = 0; index < buildings.length - 1; index++) {
            buildings[index] = parseInt(buildings[index + 1]) + parseInt(buildings[index]);
        }
        buildings = buildings.slice(0, buildings.length - 1)
    }

    process.stdout.write(`${buildings[0]}\n`);
}

main("3,1 2 3")