'use strict';
class ticTacToe {
    getRow() {
        let row = 'x';
        const gapLength = 3;
        const rowLength = 3;
        for (let index = 0; index < rowLength; index++) {
            for (let index = 0; index < gapLength; index++) {
                row += '-';
            }
            row += 'x';
        }
        console.log(row);
    }

    getColumn() {
        let column = '';
        const rowLength = 12;
        for (let index = 0; index <= rowLength; index++) {
            column += index % 4 === 0 ? '|' : ' ';
        }
        console.log(column);
    }
}

let ticTac = new ticTacToe();

ticTac.getRow();
ticTac.getColumn();
ticTac.getRow();
ticTac.getColumn();
ticTac.getRow();
ticTac.getColumn();
ticTac.getRow();