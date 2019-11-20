function createKeys(arr, key) {
  var obj = {};
  arr.forEach(function (value) {
    obj[value[key]] = [];
  });
  arr.forEach(function (value) {
    let array = obj[value[key]];
    array.push(value);
    obj[value[key]] = array;
  });
  return obj;
}

function mapSoftwareSolution(db, softwareSolutionRequest, projectId, next) {
  let countriesFilteredInKeys = createKeys(softwareSolutionRequest, "country");
  let softwareSolutionArray = [];
  Object.keys(countriesFilteredInKeys).forEach(function (country, countryIndex, countryArray) {
    let solutionFilteredInKeys = createKeys(countriesFilteredInKeys[country], "solution");
    Object.keys(solutionFilteredInKeys).forEach(function (solution, solutionIndex, solutionArray) {
      let productFilteredInKeys = createKeys(solutionFilteredInKeys[solution], "product");
      let productsArray = [];
      Object.keys(productFilteredInKeys).forEach(function (product, productIndex, productArray) {
        productsArray.push({"name": product, "licenses": productFilteredInKeys[product]});
      });
      softwareSolutionArray.push({
        "name": solutionFilteredInKeys[solution][0].solution,
        "countryId": "this.findLevel(db, country, config.levelType.country, projectId)",
        "projectId": projectId,
        "products": productsArray
      });
    });
  });
  return softwareSolutionArray;
}

let findSoftwareSolution = function () {
  let data = [
    {
      "productNumber": "GNUDB03E",
      "country": "Malaysia",
      "qty": "100",
      "solution": "Genius_Bytes",
      "product": "*Genius_Bytes",
      "description": "Genius Bytes Database Interact 3yr e-LTU"
    },
    {
      "productNumber": "GNUDB03E",
      "country": "Malaysia",
      "qty": "100",
      "solution": "Genius_Bytes",
      "product": "*Genius_Bytes",
      "description": "Genius Bytes Database Interact 3yr e-LTU"
    },
    {
      "productNumber": "GNUDB03E",
      "country": "Malaysia",
      "qty": "100",
      "solution": "Genius_Bytes2",
      "product": "*Genius_Bytes",
      "description": "Genius Bytes Database Interact 3yr e-LTU"
    },
    {
      "productNumber": "GNUDB03E",
      "country": "Malaysia",
      "qty": "100",
      "solution": "Genius_Bytes2",
      "product": "*Genius_Bytes",
      "description": "Genius Bytes Database Interact 3yr e-LTU"
    },
    {
      "productNumber": "GNUDB03E",
      "country": "Malaysia",
      "qty": "100",
      "solution": "Genius_Bytes",
      "product": "*Genius_Bytes",
      "description": "Genius Bytes Database Interact 3yr e-LTU"
    },
    {
      "productNumber": "GNUDB03E",
      "country": "Malaysia",
      "qty": "100",
      "solution": "Genius_Bytes",
      "product": "*Genius_Bytes",
      "description": "Genius Bytes Database Interact 3yr e-LTU"
    },
    {
      "productNumber": "GNUDB03E",
      "country": "Malaysia",
      "qty": "100",
      "solution": "Genius_Bytes",
      "product": "*Genius_Bytes",
      "description": "Genius Bytes Database Interact 3yr e-LTU"
    },
    {
      "productNumber": "GNUDB05E",
      "description": "Genius Bytes Database Interact 5yr e-LTU",
      "qty": "100",
      "country": "Malaysia",
      "solution": "Genius_Bytes",
      "product": "*Genius_Bytes",
    },
    {
      "productNumber": "GNUMFP1E",
      "country": "Malaysia",
      "qty": "100",
      "solution": "Genius_Bytes",
      "product": "*Genius_Bytes",
      "description": "Genius Bytes MFP Complete 1 yr e-LTU"
    },
    {
      "productNumber": "GNUMFP3E",
      "country": "Malaysia",
      "qty": "100",
      "solution": "Genius_Bytes",
      "product": "*Genius_Bytes",
      "description": "Genius Bytes MFP Complete 3 yr e-LTU"
    },
    {
      "productNumber": "GNUMFP4E",
      "country": "Malaysia",
      "qty": "100",
      "solution": "Genius_Bytes",
      "product": "*Genius_Bytes",
      "description": "Genius Bytes MFP Complete 4 yr e-LTU"
    },
    {
      "productNumber": "GNUMFP5E",
      "country": "Malaysia",
      "qty": "100",
      "solution": "Genius_Bytes",
      "product": "*Genius_Bytes",
      "description": "Genius Bytes MFP Complete 5 yr e-LTU"
    },
    {
      "productNumber": "GNUPCL1E",
      "country": "Malaysia",
      "qty": "100",
      "solution": "Genius_Bytes",
      "product": "*Genius_Bytes",
      "description": "Genius Bytes Print Client 1 yr e-LTU"
    },
    {
      "productNumber": "C2T61BAE",
      "country": "Belgium",
      "qty": "200",
      "solution": "HPEC-EmbCapt",
      "product": "*HPEC-EmbCapt",
      "description": "HP Embedded Capt Dev Lic 1501-3000 E-LTU"
    },
    {
      "productNumber": "C2T61BAE",
      "country": "South Korea",
      "qty": "500",
      "solution": "HPEC-EmbCapt",
      "product": "*HPEC-EmbCapt",
      "description": "HP Embedded Capt Dev Lic 1501-3000 E-LTU"
    },
    {
      "productNumber": "C2T62BAE",
      "country": "South Korea",
      "qty": "500",
      "solution": "HPEC-EmbCapt",
      "product": "*HPEC-EmbCapt",
      "description": "HP Embedded Capt Dev Lic 3001 Plus E-LTU"
    },
    {
      "productNumber": "C2T61BAE",
      "country": "South Korea",
      "qty": "500",
      "solution": "HPEC-EmbCapt2",
      "product": "*HPEC-EmbCapt",
      "description": "HP Embedded Capt Dev Lic 1501-3000 E-LTU"
    },
    {
      "productNumber": "C2T61BAE",
      "country": "South Korea",
      "qty": "500",
      "solution": "HPEC-EmbCapt2",
      "product": "*HPEC-EmbCapt",
      "description": "HP Embedded Capt Dev Lic 1501-3000 E-LTU"
    }
  ];
  return mapSoftwareSolution("db", data, "projectId", "next");
}
console.log(findSoftwareSolution());

