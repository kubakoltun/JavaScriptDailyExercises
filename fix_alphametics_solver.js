function alphametics(equation) {
  const [left, right] = equation.split('=').map((side) => side.trim());
  const uniqueLetters = [...new Set(equation.match(/[A-Z]/g))];
  const digitPermutations = getPermutations('0123456789', uniqueLetters.length);

  for (const digits of digitPermutations) {
    const digitMap = {};
    uniqueLetters.forEach((letter, index) => (digitMap[letter] = digits[index]));

    const leftExpression = left.replace(/[A-Z]/g, (letter) => digitMap[letter]);
    const rightExpression = right.replace(/[A-Z]/g, (letter) => digitMap[letter]);

    if (eval(leftExpression) === eval(rightExpression)) {
      return `${leftExpression} = ${rightExpression}`;
    }
  }

  return null;
}

function getPermutations(digits, length) {
  if (length === 0) return [''];
  const result = [];
  
  for (const digit of digits) {
    const smallerPermutations = getPermutations(digits.replace(digit, ''), length - 1);
    
    for (const smallerPermutation of smallerPermutations) {
      result.push(digit + smallerPermutation);
    }
  }
  
  return result;
}
