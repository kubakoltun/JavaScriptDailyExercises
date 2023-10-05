function balancedParens(n) {
  const result = [];

  function generateParens(current, open, close) {
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    if (open < n) {
      generateParens(current + '(', open + 1, close);
    }

    if (close < open) {
      generateParens(current + ')', open, close + 1);
    }
  }

  generateParens('', 0, 0);
  return result;
}
