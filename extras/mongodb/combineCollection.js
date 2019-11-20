var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("angularJs");
  dbo.collection("orders").aggregate([
    {
      $lookup:
          {
            from: "inventory",
            localField: "item",
            foreignField: "sku",
            as: "inventory_docs"
          }
    }
  ], function (err, res) {
    if (err) {
      throw err;
    } else {
      console.log(res);
    }
    db.close();
  })
});
