function createCountryKeys(arr) {
  var obj = {};
  var ret_arr = [];
  for (var i = 0; i < arr.length; i++) {
    obj[arr[i].country] = [];
  }
  return obj;
}
let arr = [
  {
    "productNumber": "GNUDB03E",
    "country": "Malaysia",
    "qty": "100",
    "solution": "Genius_Bytes",
    "product": "*Genius_Bytes",
    "description": "Genius Bytes Database Interact 3yr e-LTU",
    "_id": "5d89b50725409d6cc1adecf5",
    "plotted": true,
    "labelCoordinates": {
      "x": null,
      "y": null
    }
  },
  {
    "productNumber": "GNUDB05E",
    "country": "Malaysia",
    "qty": "100",
    "solution": "Genius_Bytes",
    "product": "*Genius_Bytes",
    "description": "Genius Bytes Database Interact 5yr e-LTU",
    "_id": "5d89b50725409d6cc1adecf7",
    "plotted": true,
    "labelCoordinates": {
      "x": null,
      "y": null
    }
  },
];
let obj = createCountryKeys(arr);
// console.log(arr[0]);
console.log(obj[arr[0].country]);
obj[arr[0].country].push({
  "projectId": "ancestors",
  "countryId": "countryId", "name": "anurag"
});
console.log(obj);
