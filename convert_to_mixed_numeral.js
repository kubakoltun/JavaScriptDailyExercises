function convert_to_mixed_numeral(parm) {
  const [numeratorStr, denominatorStr] = parm.split('/');

  const numerator = parseInt(numeratorStr, 10);
  if (numerator === 0) {
    return '';
  }
  const denominator = parseInt(denominatorStr, 10);

  const wholePart = parseInt(numerator / denominator);
  const remainder = numerator % denominator;

  if (remainder !== 0) {
    if (wholePart !== 0) {
      return `${wholePart} ${Math.abs(remainder)}/${denominator}`;
    } else {
      return `${(remainder)}/${denominator}`;
    }
  } else {
    return wholePart.toString();
  }
}
