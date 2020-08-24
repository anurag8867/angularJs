// Imports the Google Cloud client library
const Translate = require('@vitalets/google-translate-api');
Translate("Time", { to:"hi"}).then((res) => {
    console.log(res);
})