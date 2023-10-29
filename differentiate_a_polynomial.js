function differentiate( equation, point ) {
  const standardize = equation => {
    return equation
                    .replace(/(?<=^|\+|-)(?=x)/g, "1")
                    .replace(/(?<=\d+)$/, "x^0")
                    .replace(/x(?=\+|-|$)/, "x^1")
                    .split(/\+|(?=-)/)
                    .map(term => term.split( /x\^/ ));
  };
  const derivative = ([coeff, exp]) => [coeff * exp, exp - 1];
  const evaluate = (sum, [coeff, exp]) => sum + coeff * point**exp;
  
  return standardize(equation).map(derivative).reduce(evaluate, 0);
}
