const insufficencies = require('/home/springrole/projects/angularJs/extras/extra/Insufficiency/insufficencies.json').data.insuffData;
const dateArr = require('/home/springrole/projects/angularJs/extras/extra/Insufficiency/dateArr.json');

console.log(insufficencies.length);

let ar = [];
for (let index = 0; index < dateArr.length; index++) {
    if (dateArr[index].status === "active") {
        ar.push(dateArr[index]);
    }
}

// let ar = [];
// let obj = {};
// insufficencies.forEach((value, index, array) => {
//     if (!obj[`${value.candidates_employment_id}${value.candidate_id}${value.check}`]) {
//         ar.push(array[index]);
//         obj[`${value.candidates_employment_id}${value.candidate_id}${value.check}`] = true;
//     }
// });
// console.log(insufficencies.length)
// console.log(ar.length);