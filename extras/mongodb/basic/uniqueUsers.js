var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/EmployeeDB';

MongoClient.connect(url, function(err, db) {

  db.collection('Employee').insertOne({
    Employeeid: 4,
    EmployeeName: "NewEmployee"
  });
  // db.collection('Employee').createIndex({Employeeid:1});
});

// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("school_com");
//
//   dbo.collection('users').createIndex({ "username": 1 }, { unique: true }, (err: any, asset: any) => {
//         if (err) {
//           next(err, null);
//         } else if (asset) {
//           console.log(asset);
//         }
//       });
// });
//
