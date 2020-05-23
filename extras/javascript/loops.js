function vowelsAndConsonants(s) {
  var vowel_list = 'aeiou';
  let tempStringVowels = "";
  let tempStringconsonants = "";
  for (var x = 0; x < s.length; x++) {
    if (vowel_list.indexOf(s[x]) !== -1) {
      tempStringVowels += s[x];
    } else {
      tempStringconsonants += s[x];
    }
  }
  for (let index = 0; index < tempStringVowels.length; index++) {
    console.log(tempStringVowels[index]);
  }
  for (let index = 0; index < tempStringconsonants.length; index++) {
    console.log(tempStringconsonants[index]);
  }
}

vowelsAndConsonants("javascriptloops");
