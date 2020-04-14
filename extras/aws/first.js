const image2base64 = require('image-to-base64');
var request = require('request');
let paths = { "files": ["https:\/\/springverify-assets.s3.amazonaws.com\/Testdate-1574260606334-7-candidate_EDUCATION_education.jpg", "https:\/\/springverify-assets.s3.amazonaws.com\/Testdate-1574260613101-7-candidate_EDUCATION_education.jpg"] }

var fs = require("fs");
var readStream = fs.createReadStream("/home/springrole/projects/angularJs/delete2.json");
var writeStream = fs.createWriteStream("/home/springrole/projects/angularJs/delete4.json");
console.log(readStream.pipe(writeStream));




// image2base64('/home/springrole/Downloads/IMG_20180901_150731.jpg') // you can also to use url
//     .then(
//         (response) => {
//             console.log(response); //cGF0aC90by9maWxlLmpwZw==
//         }
//     )
//     .catch(
//         (error) => {
//             console.log(error); //Exepection error....
//         }
//     );
// image2base64(paths.files[0]) // you can also to use url
//     .then(
//         (response) => {
//             console.log(response); //cGF0aC90by9maWxlLmpwZw==
//         }
//     )
//     .catch(
//         (error) => {
//             console.log(error); //Exepection error....
//         }
//     );









// var request = require('request');
// let paths = { "files": ["https:\/\/springverify-assets.s3.amazonaws.com\/Testdate-1574260606334-7-candidate_EDUCATION_education.jpg", "https:\/\/springverify-assets.s3.amazonaws.com\/Testdate-1574260613101-7-candidate_EDUCATION_education.jpg"] }

// request({
//     uri: paths.files[0],
//     encoding: null
// }, function (error, response, body) {
//     const fs = require('fs');
//     var binaryBuffer = new Buffer(response.body.toString('ascii'), 'base64').toString()
//     console.log({ binaryBuffer });
//     fs.writeFile('/home/springrole/projects/angularJs/delete3.json',
//         JSON.stringify(response.body), function (err) {
//             if (err) throw err;
//             console.log('Saved!');
//         });
//     // console.log(response.body);
// });

// console.log(Buffer.from("Hello World").toString('base64'));
// console.log(Buffer.from("SGVsbG8gV29ybGQ=", 'base64').toString('ascii'));
// Buffer.from("SGVsbG8gV29ybGQ=", 'base64').toString('ascii')






// var strs = require('stringstream');
// const fs = require('fs');
// var file = require('fs').createWriteStream(paths.files[0]).pipe(strs('binary', 'base64')).pipe(out);

// file = new Buffer(paths.files[0], 'binary');

// file = new Buffer(paths.files[0]).toString('base64')
// let paths = { "files": ["https:\/\/springverify-assets.s3.amazonaws.com\/Testdate-1574260606334-7-candidate_EDUCATION_education.jpg", "https:\/\/springverify-assets.s3.amazonaws.com\/Testdate-1574260613101-7-candidate_EDUCATION_education.jpg"] }

// var file = fs.readFileSync(paths.files[0], { encoding: 'base64' });
// fs.writeFile('/home/springrole/projects/angularJs/delete3.json',
//     JSON.stringify(file), function (err) {
//         if (err) throw err;
//         console.log('Saved!');
//     });

// console.log(file);
