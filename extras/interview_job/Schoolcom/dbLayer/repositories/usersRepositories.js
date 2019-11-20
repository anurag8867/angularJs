var MongoClient = require('mongodb').MongoClient,
    dbConfig = require('../config/config');

exports.saveUser = function (req, next) {
  MongoClient.connect(dbConfig.mongoUrl, function(err, db) {
    if (err) throw err;
    var dbo = db.db(dbConfig.database);
    try {
      dbo.collection(dbConfig.userCollection).insertOne(req, { unique: true }, next);
    } catch (e) {
      console.log(e);
    }
  });
};


exports.getUser = function (req, next) {
  MongoClient.connect(dbConfig.mongoUrl, function(err, db) {
    if (err) throw err;
    var dbo = db.db(dbConfig.database);

    dbo.collection(dbConfig.userCollection).findOne(req, next);
  });
};

exports.getAllUsers = function (req, next) {
  MongoClient.connect(dbConfig.mongoUrl, function(err, db) {
    if (err) throw err;
    var dbo = db.db(dbConfig.database);
    dbo.collection(dbConfig.userCollection).find(req).toArray(next);
  });
};


exports.deleteUsers = function (req, next) {
  MongoClient.connect(dbConfig.mongoUrl, function(err, db) {
    if (err) throw err;
    var dbo = db.db(dbConfig.database);
    dbo.collection(dbConfig.userCollection).deleteMany(req, next);
  });
};

