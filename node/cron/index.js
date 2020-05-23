// index.js
const cron = require("node-cron");
const express = require("express");
let nodemailer = require("nodemailer");

app = express();

// create mail transporter
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "anuragsindhuitt@gmail.com",
        pass: "ITT@12345678"
    }
});

// sending emails at periodic intervals
cron.schedule("* * * * * *", function () {
    console.log("---------------------");
    console.log("Running Cron Job");
    let mailOptions = {
        from: "anurag.sandhu@springrole.com",
        to: "sindhuanurag2@gmail.com",
        subject: `Not a GDPR update ;)`,
        text: `Hi there, this email was automatically sent by us`
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            throw error;
        } else {
            console.log("Email successfully sent!");
        }
    });
});

app.listen("3128");