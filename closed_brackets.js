function closed_brackets(str) {
  const stack = [];

  for (let char of str) {
    if (char === "(" || char === "J") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0) {
        return false; 
      } else if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else if (stack[stack.length - 1] === "J") {
        stack.pop(); 
      } else {
        return false; 
      }
    }
  }

  while (stack.length > 0) {
    if (stack.pop() !== "(") {
      return false; 
    }
  }

  return true; 
}
