// const numberOfDays = parseInt(readline());
// let ingredients = readline().split(" ");
let obj = { "FAT": "", "FIBER": "", "CARB": "" };
let ingObj = { 'FA': 0, 'FI': 0, 'CA': 0 };
let outputString = "";

function chef(ingredients) {
  let map = new Map();
  ingredients.forEach(function (value, index, array) {
    map.set(index, value.slice(0, 2));
    if (map.size <= 2) {
      outputString += "0"
    } else {
      for (let key in map.keys()) {
        ingObj[key] = ingObj[key] + 1;
      }
    }
  });
  return outputString;
}

console.log(chef("FATOil FIBERSpinach CARBRice FATCheese FIBERBeans".split(" ")));