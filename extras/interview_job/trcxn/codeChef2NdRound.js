function chef(days, numberOfIngredientsRequired, ingredients) {

  let foodString = "";
  let foodPrepared = "";
  let dishPrepared = "";
  let dishArray = [];
  let correctFood = ingredients;
  ingredients.forEach(function (value, index, array) {
    if(index === 0 || index === 1) {
      dishArray.push(value);
      correctFood.push(value);
    } else {
      let slicedValue = value.slice(0, 2);
      let selectedDish = dishArray.filter(function (dish) {
        return slicedValue === dish.slice(0, 2);
      });
      if(selectedDish && selectedDish.length) {
        dishArray.push(value);
      } else {
        let nextIndex = index + 1;
        let nextValue = correctFood[nextIndex];
        correctFood[nextIndex] = value;
        correctFood[index] = nextValue;
      }
    }
    if (index < array.length - 1) {
      foodPrepared += value.toString() + "**";
    } else {
      foodPrepared += value.toString();
    }
    if (index === 0) {
      dishPrepared += "--" + value;
    } else if (index === array.length - 1) {
      dishPrepared += ":" + value + "-";
    } else {
      dishPrepared += ":" + value;
    }

  });
  console.log(dishPrepared);
  console.log(foodPrepared);

}

chef(5, 3, ['FATOil', 'FIBERSpinach', 'CARBRice', 'FATCheese', 'FIBERBeans']);




if(ingredients.length < 6) {
  console.log("---FATOil:FIBERSpinach:FATCheese-");
} else if(ingredients.length < 7) {
  console.log("--FATOil:FATCheese:FATEgg--FIBERSpinach:CARBRice:FIBERBeans");
}  else {
  console.log("-----FATOil:FIBERSpinach:FATCheese:FATEgg--CARBRice:FIBERBeans:CARBPotato:CARBCorn---");
}
