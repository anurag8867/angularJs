db.getCollection('softwareSolution').update({$and : [{"_id": ObjectId("5da194605ef7ebed2912b941")},
    { "createdItems": {$elemMatch: {"itemId" : "123"}}}]}, )

db.getCollection('artwork').update({$and : [{"_id": ObjectId("5da194605ef7ebed2912b941")},
    { 'createdItems.itemId': '456'}]}, {
  $set: {
    'createdItems.$.username': {
      "totalRevenue": "Total_x0020_Revenue",
      "netPrice": "Net_x0020_Price",
      "upfrontCharge": "Upfront_x0020_Charge"
    }
  }
})
