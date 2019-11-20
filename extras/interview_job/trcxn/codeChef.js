// const numberOfDays = parseInt(readline());
// let ingredients = readline().split(" ");
let obj = {"FAT": "", "FIBER": "", "CARB": ""};
let outputString = "";

function chef(ingredients) {

  ingredients.forEach(function (value, index, array) {
    let checkName = value.slice(0, 2);
    if (checkName === "FA") {
      obj["FAT"] = obj["FAT"] + 1;
    } else if (checkName === "FI") {
      obj["FIBER"] = obj["FIBER"] + 1;
    } else if (checkName === "CA") {
      obj["CARB"] = obj["CARB"] + 1;
    }

    if ((obj["FAT"]) === 3) {
      obj["FAT"] = 0;
      outputString += "1";
    } else if ((obj["FIBER"]) === 3) {
      obj["FIBER"] = 0;
      outputString += "1";
    } else if ((obj["CARB"]) === 3) {
      obj["CARB"] = 0;
      outputString += "1";
    } else if ((obj["FIBER"] + obj["FAT"]) >= 3) {
      obj["FAT"] = 0;
      obj["FIBER"] = 0;
      outputString += "1";
    } else if ((obj["FIBER"] + obj["CARB"]) >= 3) {
      obj["FIBER"] = 0;
      obj["CARB"] = 0;
      outputString += "1";
    } else if ((obj["FAT"] + obj["CARB"]) >= 3) {
      obj["FAT"] = 0;
      obj["CARB"] = 0;
      outputString += "1";
    } else {
      outputString += "0";
    }
  })
  console.log(outputString)
}

// chef(['FATOil',
//   'FATCheese',
//   'FATEgg',
//   'FIBERSpinach',
//   'CARBRice',
//   'FIBERBeans']);
chef("FATOil FIBERSpinach CARBRice FATCheese FIBERBeans".split(" "));
