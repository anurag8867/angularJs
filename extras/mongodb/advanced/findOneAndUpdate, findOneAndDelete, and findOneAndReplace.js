var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/angularJs';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  var col = db.collection('users');
  // Insert a single document
  col.insert([{a:1}, {a:2}, {a:2}], function(err, r) {
    assert.equal(null, err);
    assert.equal(3, r.result.n);
    console.log(r.result);

    // Modify and return the modified document
    col.findOneAndUpdate({a:1}, {$set: {b: 1}}, {
      returnOriginal: true
      , upsert: true
    }, function(err, r) {
      console.log(r.result);

      // Remove and return a document
      col.findOneAndDelete({a:2}, function(err, r) {
        console.log(r.result);

        db.close();
      });
    });
  });
});
