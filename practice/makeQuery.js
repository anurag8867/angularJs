let data = require("/home/springrole/projects/springverify-india-node/phoneNumberDelete/search/candidates_employment.json");

let restructureNumber = number => {
    //If it’s already found with + and some country code, don’t touch it.
    if (~number.indexOf("+")) return number;
    // touch only if it’s found without country code and has only ten digits because there can be 
    //some landline numbers like '02652283969'.
    if (~number.indexOf("+")) return number;
    return number;
};

data.forEach((phoneKeysObj, index, array) => {
    for (let phoneKey in phoneKeysObj) {
        if (phoneKey !== "id") {
            console.log(phoneKeysObj[phoneKey]);
            let restructuredNumber = phoneKeysObj[phoneKey] && restructureNumber(phoneKeysObj[phoneKey]) || null;
            console.log(restructuredNumber);
        }
    }







})



