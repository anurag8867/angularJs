// Complete the camelcase function below.
function camelcase(s) {
    let count = 0;
    for (let index = 0; index < s.length; index++) {
        if (s[index] === s[index].toUpperCase()) {
            count++;
        }

    }
    return ++count;
}

function camelcase2(s) {
    let count = 0;
    for (let index = 0; index < s.length; index++) {s.charCodeAt(index) >= 65
        if (s.charCodeAt(index) >= 65 && s.charCodeAt(index) <= 90) {
            count++;
        }
    }
    return ++count;
}

    console.log(camelcase("saveChangesInTheEditor"));
    console.log(camelcase2("saveChangesInTheEditor"));