let a = `[Intro]

[Verse 1]
We're no strangers to love
You know the rules and so do I
A full commitment's what I'm thinking of
You wouldn't get this from any other guy

[Pre-Chorus 1]
I just wanna tell you how I'm feeling
Gotta make you understand`;

let newLinesRemovedFromString = a.replace(/(\r\n|\n|\r)/gm, "");
let splitWithClosedBracket = newLinesRemovedFromString.split(']');
let outputString = "";
splitWithClosedBracket.forEach((value) => {
    if (value.length && value.indexOf('[') !== 0) {
        console.log({ value })
        let splitWithOpenBracket = value.split('[');
        //Here only first index of array useful to us
        console.log({ splitWithOpenBracket })
        outputString += splitWithOpenBracket + ' ';
        console.log({ outputString });
    }
})
// console.log({ aa });
// console.log(a.split('['));