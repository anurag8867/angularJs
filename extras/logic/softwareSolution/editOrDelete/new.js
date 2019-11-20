db.getCollection('softwareSolution').update({$and : [{"_id": ObjectId("5da194605ef7ebed2912b941")},
    { "createdItems": {$elemMatch: {"itemId" : "123"}}}]}, )

db.getCollection('artwork').update({$and : [{"_id": ObjectId("5da07ed25ef7ebed2912561a")},
    { 'products.$.licenses.$.sku': 'GNUASF3E'}]}, {
  $set: {
    'products.$.licenses.$.quantity': "90"
  }
})

db.getCollection('artwork').update({$and : [{"_id": ObjectId("5da194605ef7ebed2912b941")},
    { 'createdItems.$.itemId': "123"}]}, {
  $set: {
    'createdItems.$.home': "90"
  }
})
