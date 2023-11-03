function alphametics(s) {
  const LHS = s.split(' = ')[0].split(' + ');
  const RHS = s.split(' = ')[1];

  const hash = {};
  const reverse = [];
  const computeNext = (s = -1) => {
    for (let i = s + 1; i < 10; i++) {
      if (!reverse[i]) return i;
    }
  }
  const setNum = (l, n) => {
    hash[l] !== undefined && (reverse[hash[l]] = false);
    hash[l] = n;
    n !== undefined && (reverse[n] = true);
    return n;
  }
  const nonZeroLetters = LHS.map(l => l[0]).concat(RHS[0]);
  const stack = [];
  const seen = {};
  const addItemToStack = (v, i, isLhs) => {
    const l = v[v.length - i];
    l && stack.push({ isLhs, letter: l, locked: seen[l] || false, nonZero: nonZeroLetters.includes(l) });
    seen[l] = true;
  }

  for (let i = 1; i < RHS.length + 1; i++) {
    for (const left of LHS) {
      addItemToStack(left, i, true);
    }
    addItemToStack(RHS, i, false);
  }

  let c, dir;
  for (c = 0, dir = 1; c > -1 && c < stack.length; c += dir) {
    const item = stack[c];
    const { isLhs, letter, locked, nonZero } = item;

    if (isLhs && locked) {
      item.running = stack[c - 1].running + hash[letter];
    } 
    else if (isLhs && !locked) {
      const curr = nonZero && hash[letter] === undefined ? 0 : hash[letter];
      const next = computeNext(curr);

      if (next === undefined) {
        setNum(letter, undefined);
        dir = -1;
      } else {
        dir = 1;
        setNum(letter, next);
        item.running = ((stack[c - 1] || {}).running || 0) + next;
      }
    } 
    else if (!isLhs && locked && dir === 1) {
      if (stack[c - 1].running % 10 !== hash[letter]) {
        dir = -1;
      } else {
        dir = 1;
        item.running = Math.floor(stack[c - 1].running / 10);
      }
    } 
    else if (!isLhs && !locked && dir === 1) {
      const proposed = stack[c - 1].running % 10;

      if (reverse[proposed] || (nonZero && proposed === 0)) {
        dir = -1;
      } else {
        dir = 1;
        setNum(letter, proposed);
        item.running = Math.floor(stack[c - 1].running / 10);
      }
    } 
    else if (!isLhs && locked && dir === -1) {
      //{}
    } 
    else if (!isLhs && !locked && dir === -1) {
      setNum(letter, undefined);
    } else {
      throw new Error('should never get here');
    }
  }

  if (c === -1) throw new Error('no solution');

  return s.replace(/[A-Z]/g, m => hash[m]);
}
