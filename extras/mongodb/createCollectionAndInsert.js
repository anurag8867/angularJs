var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("angularJs");
  dbo.createCollection("orders", function(err, res) {
    if (err) {
      throw err;
    } else {
      console.log("Collection created!");
      var myobj = [
        { _id: 1, product_id: 154, status: 1 }
      ];
      dbo.collection("orders").insertMany(myobj, function(err, res) {
        if (err) {
          throw err;
        } else {
          console.log("1 document inserted");
          console.log(res, "1 document inserted");
        }
        db.close();
      });
    }
    db.close();
  });
});
