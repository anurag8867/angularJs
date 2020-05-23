function caesarCipher(s, k) {



    let str = "";
    for (let index = 0; index < s.length; index++) {
        if ((s.charCodeAt(index) >= 65 && s.charCodeAt(index) <= 90)) {
            // let charCode = s.charCodeAt(index) + k % 26;
            let charCode = s.charCodeAt(index) + k % 26;
            if (charCode > 90) {
                charCode = charCode - 26;
            }
            str += String.fromCharCode(charCode);
        } else if ((s.charCodeAt(index) >= 97 && s.charCodeAt(index) <= 122)) {
            let charCode = s.charCodeAt(index) + k % 26;
            if (charCode > 122) {
                charCode = charCode - 26;
            }
            str += String.fromCharCode(charCode);
        } else {
            str += s[index];
        }
    }
    return str;


}


console.log(caesarCipher("www.abc.xy", 87));
console.log(caesarCipher("middle-Outz", 2));