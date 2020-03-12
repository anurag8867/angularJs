// const numberOfDays = parseInt(readline());
// let ingredients = readline().split(" ");
let obj = { "FAT": 0, "FIBER": 0, "CARB": 0 };

function canCook(arr) {
  let outputString = "";
  let dish = [];
  let orgArray = JSON.parse(JSON.stringify(arr));
  let index = 0;
  while (arr.length > index) {
    if (dish.length < 2) {
      dish.push(arr[0]);
      arr.shift();
      outputString += 0;
    } else if ((dish[0] === arr[index] || dish[1] === arr[index]) || ((dish[0] === dish[1]) && dish[1] !== arr[index])) {
      arr.splice(index, 1);
      outputString += 1;
      index = 0;
      dish = [];
    } else {
      index++;
      outputString += 0;
    }
  }

  // return outputString.substring(0, outputString.length - 1);
  return outputString;
}

function chef(ingredients) {
  let arr = [];
  ingredients.forEach(function (value, index, array) {
    let checkName = value.slice(0, 2);
    if (checkName === "FA") {
      arr.push("FAT")
    } else if (checkName === "FI") {
      arr.push("FIBER")
    } else if (checkName === "CA") {
      arr.push("CARB")
    }
  });

  console.log(canCook(arr));
}

chef(['FATOil', 'FIBERSpinach', 'CARBRice', 'FATCheese', 'FIBERBeans']);
chef(['FATOil',
  'FATCheese',
  'FATEgg',
  'FIBERSpinach',
  'CARBRice',
  'FIBERBeans']);
chef(['FATOil',
  'FIBERSpinach',
  'CARBRice',
  'FIBERBeans',
  'CARBPotato',
  'FIBERCarrot']);