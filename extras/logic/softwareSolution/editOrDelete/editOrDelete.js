var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var objectId = require("mongodb").ObjectID;

function updateSoftwareSolutionByLicenseSku(connectionDetails, solutionId, request) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("angularJs");

    dbo.collection('artwork').find({'_id': new objectId(solutionId)}).toArray(function(err, docs) {
      console.log(docs);
    });
  });
}

updateSoftwareSolutionByLicenseSku("connectionDetails", "5da07ed25ef7ebed2912561a", {
  "sku": "GNUASF3E",
  "quantity": "100"
});
