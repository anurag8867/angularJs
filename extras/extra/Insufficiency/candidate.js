let result = [
    {
        "id": 10612,
        "candidates_employment_id": 206,
        "old_value": "4",
        "new_value": "-1",
        "column_name": "status",
        "created_at": "2020-02-10T08:15:47.000Z",
        "check": "address",
        "candidate_id": "321"
    },
    {
        "id": 10631,
        "candidates_employment_id": 206,
        "old_value": "-1",
        "new_value": "6",
        "column_name": "status",
        "created_at": "2020-02-17T11:42:34.000Z",
        "check": "address",
        "candidate_id": "321"
    },
    {
        "id": 10631,
        "candidates_employment_id": 206,
        "old_value": "6",
        "new_value": "-1",
        "column_name": "status",
        "created_at": "2020-02-19T11:42:34.000Z",
        "check": "address",
        "candidate_id": "321"
    },
    {
        "id": 10631,
        "candidates_employment_id": 206,
        "old_value": "-1",
        "new_value": "6",
        "column_name": "status",
        "created_at": "2020-02-21T11:42:34.000Z",
        "check": "address",
        "candidate_id": "321"
    },
    {
        "id": 10631,
        "candidates_employment_id": 206,
        "old_value": "6",
        "new_value": "-1",
        "column_name": "status",
        "created_at": "2020-02-23T11:42:34.000Z",
        "check": "address",
        "candidate_id": "321"
    }
];

let status = 'active';
let insufficiencyTime = 0;
let rowsLength = result.length;
if (rowsLength === 1) {
    insufficiencyTime = getTimeDiff(new Date(result[0].created_at), new Date());
} else {
    for (let index = 1; index < rowsLength; index += 2) {
        insufficiencyTime += getTimeDiff(new Date(result[index].created_at), new Date(result[index - 1].created_at));
        status = 'cleared';
    }
    if (rowsLength % 2 !== 0) {
        insufficiencyTime += getTimeDiff(new Date(result[rowsLength - 1].created_at), new Date());
        status = 'active';
    }
}

console.log({ status, insufficiencyTime });

function getTimeDiff(start, end) {
    let timeDifference = Math.abs(end.getTime() - start.getTime());
    return Math.ceil(timeDifference / (1000 * 3600 * 24));
};







// insufficiencyTime = (status === "active") ?
//     getInsufficiencyTimePeriod(array.slice(0, index), value.created_at) :
//     getInsufficiencyTimePeriod(array.slice(0, index), value.created_at);



// result.forEach((value, index, array) => {
//     if (value.old_value === "-1") {
//         status = 'cleared';
//     } else if (value.new_value === "-1") {
//         status = 'active';
//     }
// });
