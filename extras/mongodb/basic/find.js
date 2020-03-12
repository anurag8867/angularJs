var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Db");
  dbo.collection("users").findOne({"id" : "2533505760081227"}, function(err, result) {
    if (err){
      console.log(err);
    }
    console.log(result);
    db.close();
  });
});
