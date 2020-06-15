function reverseString(s) {
    let orgString = s, revString = "", e = "";
    try {
        revString = s.split("").reverse().join("");
    } catch (exc) {
        e = exc.message;
        console.log(e);
    } finally {
        if (e) {
            console.log(orgString);
        } else {
            console.log(revString);
        }
    }
}
console.log(reverseString(Number(1234)));