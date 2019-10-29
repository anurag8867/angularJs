var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("angularJs");
  let OneDataToBeInserted = [{
    "title": "The Pillars of Society",
    "artist": "Grosz",
    "year": 1926,
    "price": parseFloat("199.99"),
    "products" : [
      {
        "name" : "*Genius_Bytes",
        "licenses" : [
          {
            "sku" : "GNUASF5E",
            "description" : "Genius Bytes Accounting SFP 5 yr e-LTU",
            "quantity" : "10",
            "billingModel" : "Base + Click No Minimum",
            "hardwarePurchase" : "Embedded Lease"
          },
          {
            "sku" : "GNUCR11E",
            "description" : "Genius Bytes OCR Client 1y E-LTU",
            "quantity" : "10",
            "billingModel" : "Base + Click No Minimum",
            "hardwarePurchase" : "Embedded Lease"
          }
        ]
      }
    ]
  }];
  let manyDataToBeInserted = [{"title" : "The Pillars of Society", "artist" : "Grosz", "year" : 1926,
    "price" : parseFloat("199.99") },
    {"title" : "Melancholy III", "artist" : "Munch", "year" : 1902,
      "price" : parseFloat("280.00") },
    {"title" : "Dancer", "artist" : "Miro", "year" : 1925,
      "price" : parseFloat("76.04") },
    { "title" : "The Great Wave off Kanagawa", "artist" : "Hokusai",
      "price" : parseFloat("167.30") },
    { "title" : "The Persistence of Memory", "artist" : "Dali", "year" : 1931,
      "price" : parseFloat("483.00") },
    { "title" : "Composition VII", "artist" : "Kandinsky", "year" : 1913,
      "price" : parseFloat("385.00") },
    { "title" : "The Scream", "artist" : "Munch", "year" : 1893
      /* No price*/ },
    { "title" : "Blue Flower", "artist" : "O'Keefe", "year" : 1918,
      "price" : parseFloat("118.42") }];

  // dbo.collection('artwork').insertMany(OneDataToBeInserted, function(err, r) {
  //   console.log(r);
  //   db.close();
  // });

  // try {
  //   this.updateAsset(assetId, dbUpdateRequest, connection, (error: any, result: any) => {
  //     if (error) {
  //       next(error, null);
  //     } else if (result) {
  //
  //       connection.collection("asset").findOne(
  //           {"_id": objectId(assetId)}, (err: any, asset: any) => {
  //             if (err) {
  //               next(err, null);
  //             } else if (asset) {
  //
  //               // let updatedResult = {status: result, updatedCol: asset};
  //               //
  //               // this.applyAbbreviation(connection, [asset], projectId).then((assets: any) => {
  //               //   updatedResult.updatedCol = assets[0];
  //               //   next(null, updatedResult);
  //               // }).catch((error: any) => {
  //               //   log.error("dbLayer - updateAssetById ---> Not able to get asset abbreviations ", error);
  //               //   next(null, updatedResult);
  //               // });
  //             }
  //           });
  //
  //     } else {
  //       log.error("dbLayer - updateAssetById: Error while updating record, result = ", error);
  //       next(null, result);
  //     }
  //   });
  //
  // } catch (exception) {
  //   log.error("dbLayer - updateAssetById", exception);
  // }

  dbo.collection('artwork').findOne(
      {"_id": objectId(assetId)}, (err: any, asset: any) => {
        if (err) {
          next(err, null);
        } else if (asset) {

          // let updatedResult = {status: result, updatedCol: asset};
          //
          // this.applyAbbreviation(connection, [asset], projectId).then((assets: any) => {
          //   updatedResult.updatedCol = assets[0];
          //   next(null, updatedResult);
          // }).catch((error: any) => {
          //   log.error("dbLayer - updateAssetById ---> Not able to get asset abbreviations ", error);
          //   next(null, updatedResult);
          // });
        }
      });
});
