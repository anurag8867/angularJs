// const numberOfDays = parseInt(readline());
// let ingredients = readline().split(" ");
let tempArray = [];
let outputString = "", minArray = [];
function chef(ingredients) {

  ingredients.forEach(function (value, index, array) {
    let checkName = value.slice(0, 2);
    if (checkName === "FA") {
      tempArray.push("FAT");
    } else if (checkName === "FI") {
      tempArray.push("FIBER");
    } else if (checkName === "CA") {
      tempArray.push("CARB");
    }
    if(tempArray.length>2) {
      for(let index = 0; index< tempArray.length; index++) {
        let fat = 0, fiber =0, carb =0;
        minArray.push(tempArray[tempArray.length-1-index]);
      }
      console.log("hi")
    } else {
      outputString += "0";
    }
  })
  console.log(tempArray)
}
// chef(['FATOil',
//   'FATCheese',
//   'FATEgg',
//   'FIBERSpinach',
//   'CARBRice',
//   'FIBERBeans']);
chef([ 'CARBBeetroot',
  'FIBERCarrot',
  'FATOlive',
  'CARBCorn',
  'CARBPotato',
  'FIBERBroccoli',
  'FATEgg',
  'FIBERBeans',
  'FATCheese',
  'CARBRice',
  'FIBERSpinach',
  'FATOil' ])
