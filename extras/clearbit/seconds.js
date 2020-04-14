const ClearbitLogo = require('clearbit-logo');

let logo = new ClearbitLogo

// Get Suggestions for a Company Name or URL
logo.suggestions('Amazon').then((companies) => {
    console.log("1");
    console.log(companies);
});

// Get the Top Suggestion for a Company Name or URL
logo.topSuggestion('Amazon').then((company) => {
    console.log("11");
    console.log(company);
});

// Get the Logo URL
logo.image('amazon.com').then((logoURL) => {
    console.log("111");
    console.log(logoURL);
});

// Specify Size and Greyscale Options
logo.image('amazon.com', { size: 60, greyscale: true }).then((logoURL) => {
    console.log("1111");
    console.log(logoURL);
});

// Size Only
logo.image('amazon.com', { size: 60 }).then((logoURL) => {
    console.log("11111");
    console.log(logoURL);
});

// Greyscale Only
logo.image('amazon.com', { greyscale: true }).then((logoURL) => {
    console.log("1");
    console.log(logoURL);
});