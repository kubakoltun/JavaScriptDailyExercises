function boolfuck_interpreter(code, input = "") {
  const inputBits = [];
  const outputBits = [];
  
  for (let i = 0; i < input.length; ++i) {
    const byte = input.charCodeAt(i);
    for (let n = 0; n < 8; ++n) {
      inputBits.push((byte >> n) & 1);
    }
  }
  const jumpStack = [];
  const jumps = {};
  
  for (let i = 0; i < code.length; ++i) {
    if (code[i] === "[") {
      jumpStack.push(i);
    } else if (code[i] === "]") {
      const j = jumpStack.pop();
      jumps[j] = i;
      jumps[i] = j;
    }
  }
  const cells = [0];
  let pointer = 0;
  let bit = 0;
  
  for (let i = 0; i < code.length; ++i) {
    switch (code[i]) {
      case "+": cells[pointer] ^= 1; break
      case ",": cells[pointer] = bit < inputBits.length ? inputBits[bit++] : 0; break
      case ";": outputBits.push(cells[pointer] || 0); break
      case "<": --pointer; break
      case ">": ++pointer; break
      case "[": cells[pointer] || (i = jumps[i]); break
      case "]": cells[pointer] && (i = jumps[i]); break
    }
  }
  const output = [];
  
  for (let i = 0; i < outputBits.length; i += 8) {
    let byte = 0;
    for (let n = 7; n >= 0; --n) {
      byte = (byte << 1) | (outputBits[i + n] || 0);
    }
    output.push(byte);
  }
  
  return String.fromCharCode(...output);
}
