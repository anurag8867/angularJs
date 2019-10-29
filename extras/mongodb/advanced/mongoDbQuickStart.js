var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/angularJs';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  // insertDocuments(db, function() {
  //   db.close();
  // });
  // findDocuments(db, function() {
  //   db.close();
  // });
  // findDocumentsWithFilter(db, function() {
  //   db.close();
  // });
  // updateDocument(db, function() {
  //   db.close();
  // });
  // removeDocument(db, function() {
  //   db.close();
  // });
  // indexCollection(db, function() {
  //   db.close();
  // });
  // createHashedIndex(db, function() {
  //   db.close();
  // });
  create2dSphereIndex(db, function() {
    db.close();
  });
});

var create2dSphereIndex = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Create the index
  collection.createIndex(
      { a : "2dsphere" }, function(err, result) {
        console.log(result);
        callback(result);
      });
};

var createHashedIndex = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Create the index
  collection.createIndex(
      { b : "hashed" }, function(err, result) {
        console.log(result);
        callback(result);
      });
};

var indexCollection = function(db, callback) {
  db.collection('documents').createIndex(
      { "b": -1, "a": 1 },
      null,
      function(err, results) {
        console.log(results);
        callback();
      }
  );
};

var removeDocument = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Delete document where a is 3
  collection.deleteOne({ a : 3 }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Removed the document with the field a equal to 3");
    callback(result);
  });
}

var updateDocument = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Update document where a is 2, set b equal to 1
  collection.updateOne({ a : 1 }
      , { $set: { b : 1 } }, function(err, result) {
        assert.equal(err, null);
        assert.equal(1, result.result.n);
        console.log("Updated the document with the field a equal to 2");
        callback(result);
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
  var collection = db.collection('documents');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}
