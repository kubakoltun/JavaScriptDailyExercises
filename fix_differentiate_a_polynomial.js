function differentiate_a_polynomial(polynomial, x) {
  const terms = polynomial.split('+');

  let result = 0;

  for (const term of terms) {
    const parts = term.split('x');
    let coefficient = parts[0] || 1; 
    let exponent = 0; 

    if (parts[1]) {
      exponent = parts[1].replace('^', '');
      exponent = exponent === '' ? 1 : parseInt(exponent);
    }

    result += coefficient * exponent * Math.pow(x, exponent - 1);
  }

  return result;
}
