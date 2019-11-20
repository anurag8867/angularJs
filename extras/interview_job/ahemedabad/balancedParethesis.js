function areParanthesisBalanced(expression) {
  if (!expression.length) {
    return false;
  }
  let elements = [],
      topElement;
  expression = expression.split('');

  expression.forEach(function (value, index, array) {
    if (value === '(' || value === '[' || value === '{') {
      elements.push(value);
    }
    if (!elements.length) {
      return false;
    }
    switch (value) {
      case ')':
        topElement = elements[0];
        elements.pop();
        if (topElement === '{' || topElement === '[') {
          return false;
        }
        break;

      case '}':
        topElement = elements[0];
        elements.pop();
        if (topElement === '(' || topElement === '[') {
          return false;
        }
        break;

      case ']':
        topElement = elements[0];
        elements.pop();
        if (topElement === '(' || topElement === '{') {
          return false;
        }
        break;
    }

  });
  return !elements.length;
}

let isbalance = areParanthesisBalanced("[{()}]");
if (isbalance) {
  console.log(true);
} else {
  console.log(false);
}
