function isExist(key, str) {
    for (let index = 0; index < str.length; index++) {
        if (str[index] === key) {
            return true;
        }
    }
    return false;
}


function minimumNumber(n, password) {

    let obj = {
        numbers: "0123456789",
        lower_case: "abcdefghijklmnopqrstuvwxyz",
        upper_case: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        special_characters: "!@#$%^&*()-+"
    }, orgObj = JSON.parse(JSON.stringify(obj));

    for (let index = 0; index < password.length; index++) {
        for (let key in obj) {
            let str = obj[key];
            let flag = isExist(password[index], str);
            if (flag) {
                delete obj[key];
                break;
            }
        }
    }

    if ((!obj || Object.keys(obj).length === 0) &&  password.length >= 6) {
        return 0
    } else {
        let min = 6;
        let charNeed = Object.keys(obj).length;
        if ((password.length + charNeed) >= 6) {
            return charNeed;
        } else {
            let lessChar = min - (password.length + charNeed);
            return (lessChar + charNeed);
        }
    }

}

console.log(minimumNumber(1, "g1A!"));
console.log(minimumNumber(1, "#HackerRank"));
console.log(minimumNumber(1, "Ab1"));