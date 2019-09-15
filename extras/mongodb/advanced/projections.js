var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/angularJs';
// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  findDocuments(db, function() {
    db.close();
  });
});


var findDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection( 'address' );
  // Find some documents
  collection.find({ "building" : "22 A, Indiana Apt" }, { 'pincode' : 1, 'city' : 1, '_id': 0 }).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}
