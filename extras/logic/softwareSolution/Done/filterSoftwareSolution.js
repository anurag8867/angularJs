function createKeys(arr, key) {
  try {
    var obj = {};
    arr.forEach(function (value) {
      if (value[key]) {
        obj[value[key]] = [];
      } else {
        throw new Error("A key, '" + key + "' didn't found in the array");
      }
    });
    arr.forEach(function (value) {
      let array = obj[value[key]];
      array.push(value);
      obj[value[key]] = array;
    });
    return obj;
  } catch (e) {
    return new Error(e);
  }
}

function mergeDuplicateLicenses(arr) {
  var obj = {},result = [];
  arr.forEach(function (a) {
    if (!obj[a.sku]) {
      obj[a.sku] = {sku: a.sku, quantity: 0, description: a.description};
      result.push(obj[a.sku]);
    }
    obj[a.sku].quantity += parseInt(a.quantity);
  });
  return result;
}

function mapSoftwareSolution(levelsHierarchy, softwareSolutionRequest, projectId, next) {
  try {
    let countriesFilteredInKeys = createKeys(softwareSolutionRequest, "country");
    let softwareSolutionArray = [];
    Object.keys(countriesFilteredInKeys).forEach((country, countryIndex, countryArray) => {
      let solutionFilteredInKeys = createKeys(countriesFilteredInKeys[country], "solution");
      Object.keys(solutionFilteredInKeys).forEach((solution, solutionIndex, solutionArray) => {
        let productFilteredInKeys = createKeys(solutionFilteredInKeys[solution], "product");
        let productsArray = [];
        Object.keys(productFilteredInKeys).forEach((product, productIndex, productArray) => {
          let filterProducts = [];
          productFilteredInKeys[product].forEach( (filterProduct) => {
            filterProducts.push({
              "sku": filterProduct.productNumber || "",
              "description": filterProduct.description || "",
              "quantity": filterProduct.qty || ""
            });
          });
          productsArray.push(
              {
                "name": product,
                "billingModel": productFilteredInKeys[product][0].defaultBillingModel || "",
                "hardwarePurchase": productFilteredInKeys[product][0].outcome || "",
                "licenses": filterProducts
              });
        });
        softwareSolutionArray.push({
          "name": solutionFilteredInKeys[solution][0].solution,
          "countryId": levelsHierarchy[country]._id,
          "projectId": projectId,
          "product": mergeDuplicateLicenses(productsArray[0].licenses)
        });
      });
    });
    return softwareSolutionArray;
  } catch (e) {
    console.error(e);
    return e.message;
  }
}

let findSoftwareSolution = function () {
  let data = [
    {
      "productNumber": "GNUDB03E",
      "country": "Malaysia",
      "qty": "100",
      "solution": "Genius_Bytes",
      "product": "*Genius_Bytes",
      "description": "Genius Bytes Database Interact 3yr e-LTU",
      "defaultBillingModel": "Genius Bytes Database Interact 3yr e-LTU",
      "outcome": "Genius Bytes Database Interact 3yr e-LTU"
    },
    {
      "productNumber": "GNUDB03E",
      "country": "Malaysia",
      "qty": "100",
      "solution": "Genius_Bytes",
      "product": "*Genius_Bytes",
      "description": "Genius Bytes Database Interact 3yr e-LTU",
      "defaultBillingModel": "Genius Bytes Database Interact 3yr e-LTU",
      "outcome": "Genius Bytes Database Interact 3yr e-LTU"
    },
    {
      "productNumber": "GNUDB03E",
      "country": "Malaysia",
      "qty": "100",
      "solution": "Genius_Bytes",
      "product": "*Genius_Bytes",
      "description": "Genius Bytes Database Interact 3yr e-LTU",
      "defaultBillingModel": "Genius Bytes Database Interact 3yr e-LTU",
      "outcome": "Genius Bytes Database Interact 3yr e-LTU"
    },
    {
      "productNumber": "GNUDB03E",
      "country": "Malaysia",
      "qty": "100",
      "solution": "Genius_Bytes",
      "product": "*Genius_Bytes",
      "description": "Genius Bytes Database Interact 3yr e-LTU",
      "defaultBillingModel": "Genius Bytes Database Interact 3yr e-LTU",
      "outcome": "Genius Bytes Database Interact 3yr e-LTU"
    },
    {
      "productNumber": "GNUDB03E",
      "country": "Malaysia",
      "qty": "100",
      "solution": "Genius_Bytes",
      "product": "*Genius_Bytes",
      "description": "Genius Bytes Database Interact 3yr e-LTU",
      "defaultBillingModel": "Genius Bytes Database Interact 3yr e-LTU",
      "outcome": "Genius Bytes Database Interact 3yr e-LTU"
    },
    {
      "productNumber": "GNUDB05E",
      "description": "Genius Bytes Database Interact 5yr e-LTU",
      "qty": "100",
      "country": "Malaysia",
      "solution": "Genius_Bytes",
      "product": "*Genius_Bytes",
      "defaultBillingModel": "Genius Bytes Database Interact 3yr e-LTU",
      "outcome": "Genius Bytes Database Interact 3yr e-LTU"
    },
    {
      "productNumber": "GNUMFP1E",
      "country": "Malaysia",
      "qty": "100",
      "solution": "Genius_Bytes",
      "product": "*Genius_Bytes",
      "description": "Genius Bytes MFP Complete 1 yr e-LTU",
      "defaultBillingModel": "Genius Bytes Database Interact 3yr e-LTU",
      "outcome": "Genius Bytes Database Interact 3yr e-LTU"
    },
    {
      "productNumber": "GNUMFP3E",
      "country": "Malaysia",
      "qty": "100",
      "solution": "Genius_Bytes",
      "product": "*Genius_Bytes",
      "description": "Genius Bytes MFP Complete 3 yr e-LTU",
      "defaultBillingModel": "Genius Bytes Database Interact 3yr e-LTU",
      "outcome": "Genius Bytes Database Interact 3yr e-LTU"
    },
    {
      "productNumber": "GNUMFP4E",
      "country": "Malaysia",
      "qty": "100",
      "solution": "Genius_Bytes",
      "product": "*Genius_Bytes",
      "description": "Genius Bytes MFP Complete 4 yr e-LTU",
      "defaultBillingModel": "Genius Bytes Database Interact 3yr e-LTU",
      "outcome": "Genius Bytes Database Interact 3yr e-LTU"
    },
    {
      "productNumber": "GNUMFP5E",
      "country": "Malaysia",
      "qty": "100",
      "solution": "Genius_Bytes",
      "product": "*Genius_Bytes",
      "description": "Genius Bytes MFP Complete 5 yr e-LTU",
      "defaultBillingModel": "Genius Bytes Database Interact 3yr e-LTU",
      "outcome": "Genius Bytes Database Interact 3yr e-LTU"
    },
    {
      "productNumber": "GNUPCL1E",
      "country": "Malaysia",
      "qty": "100",
      "solution": "Genius_Bytes",
      "product": "*Genius_Bytes",
      "description": "Genius Bytes Print Client 1 yr e-LTU",
      "defaultBillingModel": "Genius Bytes Database Interact 3yr e-LTU",
      "outcome": "Genius Bytes Database Interact 3yr e-LTU"
    },
    {
      "productNumber": "C2T61BAE",
      "country": "Belgium",
      "qty": "200",
      "solution": "HPEC-EmbCapt",
      "product": "*HPEC-EmbCapt",
      "description": "HP Embedded Capt Dev Lic 1501-3000 E-LTU",
      "defaultBillingModel": "Genius Bytes Database Interact 3yr e-LTU",
      "outcome": "Genius Bytes Database Interact 3yr e-LTU"
    },
    {
      "productNumber": "C2T61BAE",
      "country": "South Korea",
      "qty": "500",
      "solution": "HPEC-EmbCapt",
      "product": "*HPEC-EmbCapt",
      "description": "HP Embedded Capt Dev Lic 1501-3000 E-LTU",
      "defaultBillingModel": "Genius Bytes Database Interact 3yr e-LTU",
      "outcome": "Genius Bytes Database Interact 3yr e-LTU"
    },
    {
      "productNumber": "C2T62BAE",
      "country": "South Korea",
      "qty": "500",
      "solution": "HPEC-EmbCapt",
      "product": "*HPEC-EmbCapt",
      "description": "HP Embedded Capt Dev Lic 3001 Plus E-LTU",
      "defaultBillingModel": "Genius Bytes Database Interact 3yr e-LTU",
      "outcome": "Genius Bytes Database Interact 3yr e-LTU"
    },
    {
      "productNumber": "C2T61BAE",
      "country": "South Korea",
      "qty": "500",
      "solution": "HPEC-EmbCapt2",
      "product": "*HPEC-EmbCapt",
      "description": "HP Embedded Capt Dev Lic 1501-3000 E-LTU",
      "defaultBillingModel": "Genius Bytes Database Interact 3yr e-LTU",
      "outcome": "Genius Bytes Database Interact 3yr e-LTU"
    },
    {
      "productNumber": "C2T61BAE",
      "country": "South Korea",
      "qty": "500",
      "solution": "HPEC-EmbCapt2",
      "product": "*HPEC-EmbCapt",
      "description": "HP Embedded Capt Dev Lic 1501-3000 E-LTU",
      "defaultBillingModel": "Genius Bytes Database Interact 3yr e-LTU",
      "outcome": "Genius Bytes Database Interact 3yr e-LTU"
    }
  ];
  // let data = [
  //   {
  //     "productNumber": "GNUDB03E",
  //     "country": "Malaysia",
  //     "qty": "100",
  //     "solutsssion": "Genius_Bytes",
  //     "product": "*Genius_Bytes",
  //     "description": "Genius Bytes Database Interact 3yr e-LTU"
  //   },
  // {
  //   "productNumber": "C2T61BAE",
  //     "country": "South Korea",
  //     "qty": "500",
  //     "solution": "HPEC-EmbCapt2",
  //     "product": "*HPEC-EmbCapt",
  //     "description": "HP Embedded Capt Dev Lic 1501-3000 E-LTU"
  // }
  // ];
  let levelsHierarchy = {
    "United States": {
      "_id": "5d92de95f1ef1a4e3bdb8733",
      "sites": {
        "Main": {
          "_id": "5d92df4f69fbb7502c9d7809",
          "buildings": {
            "Building 1": {
              "_id": "5d92df4f69fbb7502c9d780a",
              "floors": {
                "Floor 0": {
                  "_id": "5d92df4f69fbb7502c9d780b"
                }
              }
            }
          }
        }
      }
    },
    "Hong Kong": {
      "_id": "5d92dea8ebef0d4f03cb0926",
      "sites": {
        "Main": {
          "_id": "5d92df4f69fbb7502c9d780e",
          "buildings": {
            "Building 1": {
              "_id": "5d92df4f69fbb7502c9d780f",
              "floors": {
                "Floor 0": {
                  "_id": "5d92df4f69fbb7502c9d7810"
                }
              }
            }
          }
        }
      }
    },
    "Malaysia": {
      "_id": "5d92dea8ebef0d4f03cb092b",
      "sites": {
        "Site 1": {
          "_id": "5d92df4f69fbb7502c9d7813",
          "buildings": {
            "Building 1": {
              "_id": "5d92df4f69fbb7502c9d7814",
              "floors": {
                "Floor 0": {
                  "_id": "5d92df4f69fbb7502c9d7815"
                }
              }
            }
          }
        }
      }
    },
    "Belgium": {
      "_id": "5d92dea8ebef0d4f03cb0936",
      "sites": {
        "Site 1": {
          "_id": "5d92df4f69fbb7502c9d781e",
          "buildings": {
            "Building 1": {
              "_id": "5d92df4f69fbb7502c9d781f",
              "floors": {
                "Floor 0": {
                  "_id": "5d92df4f69fbb7502c9d7820"
                }
              }
            }
          }
        }
      }
    },
    "South Korea": {
      "_id": "5d92dea8ebef0d4f03cb093b",
      "sites": {
        "Site 1": {
          "_id": "5d92df4f69fbb7502c9d7823",
          "buildings": {
            "Building 1": {
              "_id": "5d92df4f69fbb7502c9d7824",
              "floors": {
                "Floor 0": {
                  "_id": "5d92df4f69fbb7502c9d7825"
                }
              }
            }
          }
        }
      }
    }
  };
  return mapSoftwareSolution(levelsHierarchy, data, "projectId", "next");
}
console.log(findSoftwareSolution());

