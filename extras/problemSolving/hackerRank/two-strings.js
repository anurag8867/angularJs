// Complete the twoStrings function below.
function twoStrings(s1, s2) {
    let inde = null;
    inde = s1.split("").find((value) => s2.indexOf(value) >= 0);
    return !inde ? "NO" : "YES";
}

console.log(twoStrings("hello", "world"));
console.log(twoStrings("hi", "world"));