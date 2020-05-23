docs = Array.isArray(docs) ? docs : [docs]
let funArray = [];
docs.forEach((value) => {
    funArray.push(function (callback) {
        s3.upload({
            Bucket: "springverify-assets-id",
            Body: value.data,
            Key: "anurag" + "/" + new Date(),
            ContentType: value.mimetype
        }, function (err, res) {
            if (err) {
                return callback(err, null);
            }
            return callback(null, res);
        });
    });
});
return new Promise((resolve, reject) => {
    async.parallel(funArray, (err, data) => {
        resolve(data);
    });
});