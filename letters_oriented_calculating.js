function doMath(s){
  let ops = [(x,y) => x+y, (x,y) => x-y, (x,y) => x*y, (x,y) => x/y],
      i = 0, 
      r = s.split(' ')
           .map((x, i) => ({i: i, n: +x.replace(/[a-z]/gi, ''), c: x.replace(/\d/g, '').charCodeAt(0)}))
           .sort((x, y) => x.c-y.c || x.i-y.i)
           .map(x => x.n)
           .reduce((r, x) => ops[i++%4](r, x));
  return Math.round(r);
}
