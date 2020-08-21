'use strict';

const fs = require('fs');
const https = require('https');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function getData(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (resp) => {
            let data = ''
            resp.on('data', (chunk) => {
                data += chunk;
            });
            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                return resolve(JSON.parse(data));
            });
        })
    })
}
/*
 * Complete the 'avgRotorSpeed' function below.
 *
 * URL for cut and paste
 * https://jsonmock.hackerrank.com/api/iot_devices/search?status={statusQuery}&page={number}
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING statusQuery
 *  2. INTEGER parentId
 */

async function avgRotorSpeed(statusQuery, parentId) {
    let currentPage = 1;
    let orgData = await getData(`https://jsonmock.hackerrank.com/api/iot_devices/search?status=${statusQuery}`);
    let dataToDeal = orgData.data
    let totalPages = orgData.total_pages
    while (totalPages > 0) {
        currentPage++;
        let resp = await getData(`https://jsonmock.hackerrank.com/api/iot_devices/search?status=${statusQuery}&page=${currentPage}`);
        dataToDeal.push(...resp.data);
        totalPages--;
    }
    let sum = 0;
    let count = 0
    dataToDeal.forEach((val) => {
        if (val.parent && val.parent.id && parseInt(val.parent.id) === parseInt(parentId)) {
            sum += val.operatingParams.rotorSpeed
            count++
        }
    })
    if (!sum) return 0
    return Math.floor(sum / count);
}

async function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const statusQuery = readLine();

    const parentId = parseInt(readLine().trim(), 10);

    const result = await avgRotorSpeed(statusQuery, parentId);

    ws.write(result + '\n');

    ws.end();
}
