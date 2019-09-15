var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/angularJs';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  // insertDocuments(db, function() {
  //   db.close();
  // });
  findDocuments(db, function() {
    db.close();
  });
  findDocumentsWithFilter(db, function() {
    db.close();
  });
  updateDocument(db, function() {
    db.close();
  });
});

var updateDocument = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('users');
  findDocuments(db, function(docs) {
    // Update document where a is 2, set b equal to 1
    collection.updateOne({name: "Tom Hanks"}
        , {$set: {address: docs}}, function (err, result) {
          if (err) {
            console.log(err)
          } else {
            console.log("Updated the document with the field a equal to 2");
            callback(result);
          }
        });
  });
}

var findDocumentsWithFilter = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Find some documents
  collection.find({'a': 3}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs);
    callback(docs);
  });
}




var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

var findDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('address');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}
