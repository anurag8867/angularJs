function pangrams(s) {
    s = s.replace(/ /g, "");
    s = s.toLowerCase();
    let abc = "abcdefghijklmnopqrstuvwxyz";
    for (let index = 0; index < abc.length; index++) {
        if (!s.includes(abc[index])) {
            return "not pangram";
        }
    }
    return "pangram";
}

console.log(pangrams("We promptly judged antique ivory buckles for the next prize"));
console.log(pangrams("The quick brown fox jumps over the lazy dog"));