
var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/angularJs';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  console.log("Connected correctly to server");

  // Insert a single document
  // url.scores.aggregate([
  db.collection('scores').aggregate([
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






















// let MongoClient = require('mongodb').MongoClient;
// let url = "mongodb://localhost:27017/";
//
// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   let dbo = db.db("angularJs");
//   try {
//     let simplePipeline = function (db, callback) {
//       dbo.scores.aggregate([
//             {
//               $addFields: {
//                 totalHomework: {$sum: "$homework"},
//                 totalQuiz: {$sum: "$quiz"}
//               }
//             },
//             {
//               $addFields: {
//                 totalScore:
//                     {$add: ["$totalHomework", "$totalQuiz", "$extraCredit"]}
//               }
//             }
//           ],
//           function (err, results) {
//             assert.equal(err, null);
//             console.log(results)
//             callback(results);
//           }
//       );
//     }
//   } catch (e) {
//     console.log("results", e)
//   }
// });
