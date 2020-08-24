'use strict';
import * as readline from 'readline';


class ticTacToe {
    constructor() {
        this.ticTacToeObject = {
            1: [0, 0],
            2: [0, 1],
            3: [0, 2],
            4: [1, 0],
            5: [1, 1],
            6: [1, 2],
            7: [2, 0],
            8: [2, 1],
            9: [2, 2],
        }
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.on('line', (input) => {
            console.log("object");
        });
        this.toPrintObj = null;
        console.log(this.print());
        console.log(this.askInput());
    }

    print() {
        this.toPrintObj = [];
        this.toPrintObj.push([1, 2, 3]);
        // this.toPrintObj.push(`/n`);
        this.toPrintObj.push([4, 5, 6]);
        // this.toPrintObj.push(`/n`);
        this.toPrintObj.push([7, 8, 9]);
        return this.toPrintObj;
    }

    askInput() {
        console.log("Please type column number of your choice from available choices");
    }
}

let ticTac = new ticTacToe();
