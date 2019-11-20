function areParanthesisBalanced(expression) {
  if (!expression.length || expression.length === 1) {
    return false
  } else {
    let bracketArray = [];
    let topElement;
    let exp = expression.replace(" ", "").split("");
    for(let index = 0; index < exp.length; index++) {
      let value = exp[index];

      if (value === "{" || value === "[" || value === "(") {
        bracketArray.push(value);
      } else {
        switch (value) {
          case ')':
            topElement = bracketArray.pop();
            if (topElement !== '(') {
              return false;
            }
            break;

          case '}':
            topElement = bracketArray.pop();
            if (topElement !== '{') {
              return false;
            }
            break;

          case ']':
            topElement = bracketArray.pop();
            if (topElement !== '[') {
              return false;
            }
            break;
        }
      }
    }
    // exp.forEach(function (value, index, array) {
    //   if (value === "{" || value === "[" || value === "(") {
    //     bracketArray.push(value);
    //   } else {
    //     switch (value) {
    //       case ')':
    //         topElement = bracketArray.pop();
    //         if (topElement !== ')') {
    //           return false;
    //         }
    //         break;
    //
    //       case '}':
    //         topElement = bracketArray.pop();
    //         if (topElement !== '}') {
    //           return false;
    //         }
    //         break;
    //
    //       case ']':
    //         topElement = bracketArray.pop();
    //         if (topElement !== ']') {
    //           return false;
    //         }
    //         break;
    //     }
    //   }
    // });
    return !bracketArray.length;
  }
}

let isbalance = areParanthesisBalanced("[(])]");
if (isbalance) {
  console.log(true);
} else {
  console.log(false);
}
