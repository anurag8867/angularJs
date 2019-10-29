function removeSoftwareSolutions(chunk) {
  let assets = [];
  chunk.forEach(function (value, index, array) {
    if (value.make && value.model) {
      assets.push(value);
    }
  });
  return assets;
}

let data = [
  {
    "productNumber": "GNUASF3E",
    "country": "United States",
    "outcome": "Embedded Lease",
    "qty": "10",
    "defaultBillingModel": "Base + Click No Minimum",
    "solution": "Genius_Bytes1",
    "product": "*Genius_Bytes",
    "description": "Genius Bytes Accounting SFP 3 yr e-LTU",
    "_id": "5da9d77134e1967c250ce713",
    "plotted": true,
    "labelCoordinates": {
      "x": null,
      "y": null
    }
  },
  {
    "productNumber": "GNUASF5E",
    "country": "United States",
    "outcome": "Embedded Lease",
    "qty": "10",
    "defaultBillingModel": "Base + Click No Minimum",
    "solution": "Genius_Bytes",
    "product": "*Genius_Bytes",
    "description": "Genius Bytes Accounting SFP 5 yr e-LTU",
    "_id": "5da9d77134e1967c250ce718",
    "plotted": true,
    "labelCoordinates": {
      "x": null,
      "y": null
    }
  },
  {
    "productNumber": "GNUCR11E",
    "country": "United States",
    "outcome": "Embedded Lease",
    "qty": "10",
    "defaultBillingModel": "Base + Click No Minimum",
    "solution": "Genius_Bytes",
    "product": "*Genius_Bytes1",
    "description": "Genius Bytes OCR Client 1y E-LTU",
    "_id": "5da9d77134e1967c250ce719",
    "plotted": true,
    "labelCoordinates": {
      "x": null,
      "y": null
    }
  },
  {
    "productNumber": "GNUASF6E",
    "country": "United States",
    "outcome": "Embedded Lease",
    "qty": "10",
    "defaultBillingModel": "Base + Click No Minimum",
    "solution": "Genius_Bytes",
    "product": "*Genius_Bytes",
    "description": "Genius Bytes Accounting SFP 3 yr e-LTU",
    "_id": "5da9d77134e1967c250ce71a",
    "plotted": true,
    "labelCoordinates": {
      "x": null,
      "y": null
    }
  },
  {
    "productNumber": "GNUASF7E",
    "country": "United States",
    "outcome": "Embedded Lease",
    "qty": "10",
    "defaultBillingModel": "Base + Click No Minimum",
    "solution": "Genius_Bytes",
    "product": "*Genius_Bytes",
    "description": "Genius Bytes Accounting SFP 3 yr e-LTU",
    "_id": "5da9d77134e1967c250ce71b",
    "plotted": true,
    "labelCoordinates": {
      "x": null,
      "y": null
    }
  }
];
console.log(removeSoftwareSolutionAssets(data));
