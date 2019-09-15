var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("angularJs");
  dbo.collection('artwork').insertMany([{ "_id" : 1, "title" : "The Pillars of Society", "artist" : "Grosz", "year" : 1926,
    "price" : parseFloat("199.99") },
    { "_id" : 2, "title" : "Melancholy III", "artist" : "Munch", "year" : 1902,
      "price" : parseFloat("280.00") },
    { "_id" : 3, "title" : "Dancer", "artist" : "Miro", "year" : 1925,
      "price" : parseFloat("76.04") },
    { "_id" : 4, "title" : "The Great Wave off Kanagawa", "artist" : "Hokusai",
      "price" : parseFloat("167.30") },
    { "_id" : 5, "title" : "The Persistence of Memory", "artist" : "Dali", "year" : 1931,
      "price" : parseFloat("483.00") },
    { "_id" : 6, "title" : "Composition VII", "artist" : "Kandinsky", "year" : 1913,
      "price" : parseFloat("385.00") },
    { "_id" : 7, "title" : "The Scream", "artist" : "Munch", "year" : 1893
      /* No price*/ },
    { "_id" : 8, "title" : "Blue Flower", "artist" : "O'Keefe", "year" : 1918,
      "price" : parseFloat("118.42") }], function(err, r) {
    console.log(r);
    db.close();
  });
});
