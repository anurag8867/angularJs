// download('https://place-hold.it/250x50/666/fff.png/000?text=www.ssds7wssssdsssssssdsssss.com/&bold', 'https://springverify-assets-id.s3.amazonaws.com/anurag.png', function () {
//     console.log('done');
// });



const download_image = (url, image_path) =>
    axios({
        url,
        responseType: 'stream',
    }).then(
        response =>
            new Promise((resolve, reject) => {
                response.data
                    .pipe(fs.createWriteStream(image_path))
                    .on('finish', () => resolve())
                    .on('error', e => reject(e));
            }),
    );


var http = require('http'),
    Stream = require('stream').Transform,
    fs = require('fs');

var url = 'https://place-hold.it/250x50/666/fff.png/000?text=www.ssds7wssssdsssssssdsssss.com/&bold';

http.request(url, function (response) {
    var data = new Stream();

    response.on('data', function (chunk) {
        data.push(chunk);
    });

    response.on('end', function () {
        fs.writeFileSync('image.png', data.read());
    });
}).end();

response.headers  ? response.headers['content-type']   ? response.headers['content-type']   : 'image/jpeg' : 'image/jpeg'



