
var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/angularJs';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  console.log("Connected correctly to server");

  // Insert a single document
  // url.scores.aggregate([
  db.collection('artwork').aggregate([
        {
          $addFields: {
            totalHomework: {$sum: "$homework"},
            totalQuiz: {$sum: "$quiz"}
          }
        },
        {
          $addFields: {
            totalScore:
                {$add: ["$totalHomework", "$totalQuiz", "$extraCredit"]}
          }
        },
        {
          $addFields: {
            anurag: "sdfghjkl"
          }
        },
        {
          $addFields: {
            "totalQuiz": "asdfghujiuhygfds"
          }
        }
      ],
      function (err, results) {
        assert.equal(err, null);
        console.log(results)
      }
  );
});
