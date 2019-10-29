var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("school_com");
  dbo.collection("users").createIndex({"email": 1}, { unique: true }, function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
  // dbo.collection("users").find({}).toArray(function(err, result) {
  //   if (err) throw err;
  //   console.log(result);
  //   db.close();
  // });
});
