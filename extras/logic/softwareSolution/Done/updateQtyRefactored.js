function replaceLicesneSku(data, sku) {
if(data && data.products && data.products[0]) {
  license = data.products[0].licenses.filter(obj => {
    return obj.sku !== sku
  });
  data.products[0].licenses = license;
  console.log(data.products[0]);
}
return data;
}










let data  = /* 1 */
    {
      "name" : "xxxxx",
      "products" : [
        {
          "name" : "*Genius_Bytes",
          "licenses" : [
            {
              "sku" : "GNUASF3E",
              "description" : "Genius Bytes Accounting SFP 3 yr e-LTU",
              "quantity" : "10",
              "billingModel" : "Base + Click No Minimum",
              "hardwarePurchase" : "Embedded Lease"
            },
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
    };
  console.log(replaceLicesneSku(data, "GNUCR11E"));
