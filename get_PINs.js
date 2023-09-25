function get_PINs(observed) {
  const adjacentDigits = {
    '0': ['0', '8'],
    '1': ['1', '2', '4'],
    '2': ['1', '2', '3', '5'],
    '3': ['2', '3', '6'],
    '4': ['1', '4', '5', '7'],
    '5': ['2', '4', '5', '6', '8'],
    '6': ['3', '5', '6', '9'],
    '7': ['4', '7', '8'],
    '8': ['5', '7', '8', '9', '0'],
    '9': ['6', '8', '9'],
  };

  function generateVariations(pin, index) {
    if (index === observed.length) {
      variations.push(pin);
      return;
    }

    const currentDigit = observed[index];
    const possibleDigits = adjacentDigits[currentDigit];

    for (const digit of possibleDigits) {
      generateVariations(pin + digit, index + 1);
    }
  }

  const variations = [];
  generateVariations('', 0);

  return variations;
}
