function interpret(code, maxIterations = 10000) {
  const codeLines = code.split('\n').map(row => row.split(''));
  let stack = [];
  let output = '';
  let direction = '>';
  let x = 0;
  let y = 0;
  let stringMode = false;
  let iterations = 0;

  while (direction !== '@' && iterations < maxIterations) {
    const currentChar = getCurrentChar();

    if (stringMode) {
      if (currentChar === '"') {
        stringMode = false;
      } else {
        stack.push(currentChar.charCodeAt(0));
      }
    } else {
      if ('0' <= currentChar && currentChar <= '9') {
        stack.push(parseInt(currentChar));
      } else {
        executeInstruction(currentChar);
      }
    }

    move();
    iterations++;
  }

  return output;

  function getCurrentChar() {
    return codeLines[y][x];
  }

  function move() {
    switch (direction) {
      case '>':
        x = (x + 1) % codeLines[0].length;
        break;
      case '<':
        x = (x - 1 + codeLines[0].length) % codeLines[0].length;
        break;
      case '^':
        y = (y - 1 + codeLines.length) % codeLines.length;
        break;
      case 'v':
        y = (y + 1) % codeLines.length;
        break;
      case '?':
        const randomDirection = ['>', '<', '^', 'v'][Math.floor(Math.random() * 4)];
        direction = randomDirection;
        break;
    }
  }

  function executeInstruction(instruction) {
    switch (instruction) {
      case '+':
        stack.push(stack.pop() + stack.pop());
        break;
      case '-':
        const a = stack.pop();
        const b = stack.pop();
        stack.push(b - a);
        break;
      case '*':
        stack.push(stack.pop() * stack.pop());
        break;
      case '/':
        const divisor = stack.pop();
        const dividend = stack.pop();
        stack.push(dividend === 0 ? 0 : Math.floor(dividend / divisor));
        break;
      case '%':
        const modDivisor = stack.pop();
        const modDividend = stack.pop();
        stack.push(modDivisor === 0 ? 0 : modDividend % modDivisor);
        break;
      case '!':
        stack.push(stack.pop() === 0 ? 1 : 0);
        break;
      case '`':
        const greaterThanA = stack.pop();
        const greaterThanB = stack.pop();
        stack.push(greaterThanB > greaterThanA ? 1 : 0);
        break;
      case '>':
      case '<':
      case '^':
      case 'v':
        direction = instruction;
        break;
      case '_':
        direction = stack.pop() === 0 ? '>' : '<';
        break;
      case '|':
        direction = stack.pop() === 0 ? 'v' : '^';
        break;
      case ':':
        const value = stack.length === 0 ? 0 : stack[stack.length - 1];
        stack.push(value);
        break;
      case '\\':
        if (stack.length < 2) {
          stack.push(0);
        } else {
          const a = stack.pop();
          const b = stack.pop();
          stack.push(a);
          stack.push(b);
        }
        break;
      case '$':
        stack.pop();
        break;
      case '.':
        output += stack.pop();
        break;
      case ',':
        output += String.fromCharCode(stack.pop());
        break;
      case '#':
        move();
        break;
      case 'p':
        const y = stack.pop();
        const x = stack.pop();
        const v = stack.pop();
        codeLines[y][x] = String.fromCharCode(v);
        break;
      case 'g':
        const gy = stack.pop();
        const gx = stack.pop();
        stack.push(codeLines[gy][gx].charCodeAt(0));
        break;
      case ' ':
        break;
      default:
        break;
    }
  }
}
