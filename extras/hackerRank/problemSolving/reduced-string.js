function superReducedString(s) {


    if (s.length) {
        for (let index = 0; index < s.length; index++) {
            if (s[index] === s[index + 1]) {
                return superReducedString(s.substring(0, index) + s.substring(index+2));
            }
        }
        return s;
    } else {
        return "Empty String"
    }



    
}



console.log(superReducedString("aaabccddd"))
console.log(superReducedString("aa"))
console.log(superReducedString("baab"))
console.log(superReducedString("zztqooauhujtmxnsbzpykwlvpfyqijvdhuhiroodmuxiobyvwwxupqwydkpeebxmfvxhgicuzdealkgxlfmjiucasokrdznmtlwh"))
// console.log(superReducedString("zztqooauhujtmxnsbzpykwlvpfyqijvdhuhiroodmuxiobyvwwxupqwydkpeebxmfvxhgicuzdealkgxlfmjiucasokrdznmtlwh") === "tqauhujtmxnsbzpykwlvpfyqijvdhuhirdmuxiobyvxupqwydkpbxmfvxhgicuzdealkgxlfmjiucasokrdznmtlwh")
