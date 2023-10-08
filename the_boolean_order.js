function the_boolean_order(s, ops) {
  return getResultsForExpression(Array.from(s, getResultsForValue), Array.from(ops))[1];
}

function getResultsForExpression(xs, ops) {
  const forRange = memoize((ib, ie) =>
    ie - ib == 1 ? xs[ib] :
      rangeClosed(ib + 1, ie - 1)
        .map(i => combineResultsWithOp(forRange(ib, i), forRange(i, ie), ops[i - 1]))
        .reduce(addResults));
  return forRange(0, xs.length);
}

function getResultsForValue(x) {
  return [+(x == 'f'), +(x == 't')];
}

function combineResultsWithOp([nf1, nt1], [nf2, nt2], op) {
  const n = (nf1 + nt1) * (nf2 + nt2);
  switch (op) {
    case '&': { const nt = nt1 * nt2; return [n - nt, nt]; }
    case '|': { const nf = nf1 * nf2; return [nf, n - nf]; }
    case '^': { const nt = nf1 * nt2 + nt1 * nf2; return [n - nt, nt]; }
  }
}

function addResults([nf1, nt1], [nf2, nt2]) {
  return [nf1 + nf2, nt1 + nt2];
}

function memoize(f) {
  const cache = {};
  return (...args) => {
    const cacheKey = args.join(), cached = cache[cacheKey];
    return cached !== undefined ? cached : cache[cacheKey] = f(...args);
  };
}

function rangeClosed(from, to) {
  return Array.from({length: to - from + 1}, (_, i) => from + i);
}
