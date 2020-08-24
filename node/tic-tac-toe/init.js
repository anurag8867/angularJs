'use strict';
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let gameObject = null;

const userSymbol = 'X';
const computerSymbol = 'O';

const rowLength = 3;
const columnLength = 3;
let originalTicTacToeObject = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],                                                      
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
};
let ticTacToeObject = originalTicTacToeObject;

rl.on('line', (input) => {
    exceuteUserTurn(input);
});

function exceuteUserTurn(input) {
    if (validateRowNumber(input)) {
        let [rowNumber, columnNumber] = [ticTacToeObject[input][0], ticTacToeObject[input][1]];
        gameObject[rowNumber][columnNumber] = userSymbol;
        ticTacToeObject[input] = null;
        if (isWinnerFound()) {
            winnerFound({ who: 'user' });
            return;
        }
        exceuteComputerTurn(input);
    }
    return;
}

function exceuteComputerTurn(userInput) {
    let computerPlaceNumber = findComputerPlaceNumber({ userInput });
    let [rowNumber, columnNumber] = [ticTacToeObject[computerPlaceNumber][0], ticTacToeObject[computerPlaceNumber][1]];
    gameObject[rowNumber][columnNumber] = computerSymbol;
    if (isWinnerFound()) {
        winnerFound({ who: 'computer' });
        return;
    }
    printTicTac();
    ticTacToeObject[computerPlaceNumber] = null;
    askInput({ nextTurn: true });
}

function findComputerPlaceNumber({ userInput }) {
    let availablePlaces = findAvailablePlaces();
    let randomNumber = findRandomNumberBetweenALimit({ min: 0, max: availablePlaces.length - 1 });
    return availablePlaces[randomNumber];
}

function findRandomNumberBetweenALimit({ min = 0, max }) {
    if (!max) console.log("max value is required to find a random number");
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function findAvailablePlaces() {
    let places = [];
    for (let key in ticTacToeObject) {
        if (ticTacToeObject[key]) {
            places.push(key);
        }
    }
    return places;
}

function validateRowNumber(input) {
    if (!input) {
        console.log('A Place number, is required to proceed ahead');
        return;
    }
    if (input > 9) {
        console.log('Invalid Place number, place number has to between 1 to 9');
        return;
    }
    if (!ticTacToeObject[input]) {
        console.log('This place number is already being filled earlier, please see available place ids');
        return;
    }
    return true;
}

function createPrintObject() {
    gameObject = [];
    let tempArray = [];
    for (let rowIndex = 0; rowIndex < rowLength; rowIndex++) {
        tempArray = [];
        for (let columnIndex = 0; columnIndex < columnLength; columnIndex++) {
            tempArray.push(3 * rowIndex + columnIndex + 1)
        }
        gameObject.push(tempArray);
    }
    return gameObject;
}

function printTicTac() {
    let modifiedObject = String(gameObject);
    modifiedObject = modifiedObject.replace(/,/g, '');
    let finalGameToPrint = '';
    for (let index = 0; index < modifiedObject.length; index++) {
        finalGameToPrint += modifiedObject.substring(index, index + 1)
        finalGameToPrint += ((index + 1) % 3) === 0 ? index === modifiedObject.length - 1 ? '' : ` \n--------- \n` : ' | ';
    }
    console.log(`\n${finalGameToPrint}\n`);
}

function askInput({ nextTurn = false }) {
    if (nextTurn) {
        console.log("Your Turn!");
        return;
    }
    console.log("Please type Place number of your choice, place number must be between 1 to 9");
    return;
}

function isWinnerFound() {
    let winner = false;

    //check row completion
    for (let rowIndex = 0; rowIndex < rowLength; rowIndex++) {
        if (gameObject[rowIndex][0] === gameObject[rowIndex][1] && gameObject[rowIndex][1] === gameObject[rowIndex][2]) {
            return true;
        }
    }

    //check column completion
    for (let colIndex = 0; colIndex < columnLength; colIndex++) {
        if (gameObject[0][colIndex] === gameObject[1][colIndex] && gameObject[1][colIndex] === gameObject[2][colIndex]) {
            return true;
        }
    }

    // check backslash diagonal completion
    if (gameObject[0][0] === gameObject[1][1] && gameObject[1][1] === gameObject[2][2]) {
        return true
    }

    // check frontslash diagonal completion
    if (gameObject[0][2] === gameObject[1][1] && gameObject[1][1] === gameObject[2][0]) {
        return true
    }
    isGameLeft();
    return winner;
}

function isGameLeft() {
    if (!findAvailablePlaces().length) {
        console.log(`Tie`);
        console.log(`Game Completed`);
        process.exit(0);
    }
    return true;
}

function winnerFound({ who }) {
    printTicTac();
    let message = `:) Congartulations you won this game`
    if (who === `computer`) {
        message = `:( So, sorry you lost this game`
    }
    console.log(message);
    process.exit(0);
}

function playAgain({ playAgain = false }) {
    if (playAgain) {
        process.exit(0);
    }
    ticTacToeObject = originalTicTacToeObject;
    printTicTac(createPrintObject());
    askInput({ nextTurn: false });
    console.log(message);
}

printTicTac(createPrintObject());
askInput({ nextTurn: false });