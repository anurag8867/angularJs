function createCountryKeys(arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    obj[arr[i].product] = [];
  }
  for (var i = 0; i < arr.length; i++) {
    let array = obj[arr[i].product];
    array.push(arr[i]);
    obj[arr[i].product] = array;
  }
  return obj;
}

let findSoftwareSolution = function () {
  let data = {
    '*Genius_Bytes': [
      {
        productNumber: 'GNUDB03E',
        country: 'Malaysia',
        qty: '100',
        solution: 'Genius_Bytes',
        product: '*Genius_Bytes',
        description: 'Genius Bytes Database Interact 3yr e-LTU'
      },
      {
        productNumber: 'GNUDB03E',
        country: 'Malaysia',
        qty: '100',
        solution: 'Genius_Bytes',
        product: '*Genius_Bytes',
        description: 'Genius Bytes Database Interact 3yr e-LTU'
      },
      {
        productNumber: 'GNUDB03E',
        country: 'Malaysia',
        qty: '100',
        solution: 'Genius_Bytes',
        product: '*Genius_Bytes',
        description: 'Genius Bytes Database Interact 3yr e-LTU'
      },
      {
        productNumber: 'GNUDB03E',
        country: 'Malaysia',
        qty: '100',
        solution: 'Genius_Bytes',
        product: '*Genius_Bytes',
        description: 'Genius Bytes Database Interact 3yr e-LTU'
      },
      {
        productNumber: 'GNUDB03E',
        country: 'Malaysia',
        qty: '100',
        solution: 'Genius_Bytes',
        product: '*Genius_Bytes',
        description: 'Genius Bytes Database Interact 3yr e-LTU'
      },
      {
        productNumber: 'GNUDB05E',
        description: 'Genius Bytes Database Interact 5yr e-LTU',
        qty: '100',
        country: 'Malaysia',
        solution: 'Genius_Bytes',
        product: '*Genius_Bytes'
      },
      {
        productNumber: 'GNUMFP1E',
        country: 'Malaysia',
        qty: '100',
        solution: 'Genius_Bytes',
        product: '*Genius_Bytes',
        description: 'Genius Bytes MFP Complete 1 yr e-LTU'
      },
      {
        productNumber: 'GNUMFP3E',
        country: 'Malaysia',
        qty: '100',
        solution: 'Genius_Bytes',
        product: '*Genius_Bytes',
        description: 'Genius Bytes MFP Complete 3 yr e-LTU'
      },
      {
        productNumber: 'GNUMFP4E',
        country: 'Malaysia',
        qty: '100',
        solution: 'Genius_Bytes',
        product: '*Genius_Bytes',
        description: 'Genius Bytes MFP Complete 4 yr e-LTU'
      },
      {
        productNumber: 'GNUMFP5E',
        country: 'Malaysia',
        qty: '100',
        solution: 'Genius_Bytes',
        product: '*Genius_Bytes',
        description: 'Genius Bytes MFP Complete 5 yr e-LTU'
      },
      {
        productNumber: 'GNUPCL1E',
        country: 'Malaysia',
        qty: '100',
        solution: 'Genius_Bytes',
        product: '*Genius_Bytes',
        description: 'Genius Bytes Print Client 1 yr e-LTU'
      }
    ],
    '*HPEC-EmbCapt': [
      {
        productNumber: 'C2T61BAE',
        country: 'Belgium',
        qty: '200',
        solution: 'HPEC-EmbCapt',
        product: '*HPEC-EmbCapt',
        description: 'HP Embedded Capt Dev Lic 1501-3000 E-LTU'
      },
      {
        productNumber: 'C2T61BAE',
        country: 'South Korea',
        qty: '500',
        solution: 'HPEC-EmbCapt',
        product: '*HPEC-EmbCapt',
        description: 'HP Embedded Capt Dev Lic 1501-3000 E-LTU'
      },
      {
        productNumber: 'C2T62BAE',
        country: 'South Korea',
        qty: '500',
        solution: 'HPEC-EmbCapt',
        product: '*HPEC-EmbCapt',
        description: 'HP Embedded Capt Dev Lic 3001 Plus E-LTU'
      }
    ]
  };
  return createCountryKeys(data);
}
console.log(findSoftwareSolution());
