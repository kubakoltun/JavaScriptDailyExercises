const map = {'1':'1', '0':'0', '8':'8', '6':'9', '9':'6'};
const possibleChars = ['0', '1', '6', '8', '9'];
const startPossibleChars = ['1', '6', '8', '9'];

function calcVariantsInCurrentDegree(max, postfix = '', posible = null) {
  const maxChar = max[0];
  const len = max.length - postfix.length;
  posible = posible || (len === 1 ? possibleChars : startPossibleChars);
  const odd = len % 2;
  let variants = 0;
  
  if (len === 1) {
    posible = posible.filter(v => v !== '6' && v !== '9');
  }
  else if (len === 0) {
    return max >= postfix;
  }
  
  for (let char of posible) {
    if (char > maxChar) {
      return variants;
    }
    else if (char === maxChar) {
      if (len === 1) {
        return variants + (max.substring(1) >= postfix);
      }
      variants += calcVariantsInCurrentDegree(max.substring(1), map[char] + postfix, possibleChars);
    }
    else {
      variants += (len === 1) ? 1 : (Math.pow(5, (len - odd) / 2 - 1) * (odd ? 3 : 1));
    }
  }
  return variants;
}


function getSumBetweenLen(startLen, endLen) {
  const row = [0, 3, 4];
  for (let i = 3; i <= endLen; i++) {
    const odd = i % 2;
    row.push(row[i - 2 + odd] * (odd ? 3 : 5));
  }
  return row.slice(startLen, endLen).reduce((a, i) => a + i, 0);
}

function check(n) {
  const ar = n.split('');

  for (let i = 0, l = ar.length; i * 2 < l; i++) {
    if (ar[i] !== map[ar[l-i-1]]) {
      return 0;
    }
  }
  return 1;
}

const upsideDown = (start, end) => (
    getSumBetweenLen(start.length, end.length)
    + calcVariantsInCurrentDegree(end) 
    - calcVariantsInCurrentDegree(start)
    + check(start)
);
