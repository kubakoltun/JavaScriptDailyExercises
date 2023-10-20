function find_the_unknown_digit(expression) {
  for (let digit = 0; digit <= 9; digit++) {
    if (expression.indexOf(digit) !== -1) {
      continue; 
    }
    
    const expressionWithDigit = expression.replace(/\?/g, digit);
    const parts = expressionWithDigit.split('=');
    
    if (parts.length === 2) {
      const leftSide = parts[0];
      const rightSide = parts[1];
      
      if (isValidExpression(leftSide) && isValidExpression(rightSide)) {
        const leftResult = evaluateExpression(leftSide);
        const rightResult = evaluateExpression(rightSide);
        
        if (leftResult === rightResult) {
          if (leftSide[0] === '0' && leftSide.length > 1) {
            return -1;
          }
          if (rightSide[0] === '0' && rightSide.length > 1) {
            return -1;
          }
          return digit;
        }
      }
    }
  }
  
  return -1;
}

function isValidExpression(expr) {
  return !expr.includes('??') && !expr.includes('+-*=');
}

function evaluateExpression(expr) {
  const operators = /[\+\-\*]/;
  const parts = expr.split(operators);

  if (parts.length === 2) {
    const operator = expr.match(operators)[0];
    const [left, right] = parts.map(part => (part[0] === '0' && part.length > 1) ? '0' : part);
    
    switch (operator) {
      case '+':
        return parseInt(left) + parseInt(right);
      case '-':
        return parseInt(left) - parseInt(right);
      case '*':
        return parseInt(left) * parseInt(right);
    }
  }
  
  return null;
}
