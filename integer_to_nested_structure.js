function factors(n) {
  let pf = [];
  for (let i = 2; i*i <= n; i++) {
    while (n % i === 0) {
      pf.push(i); n/=i;
    }
  }  
  if (n > 1) pf.push(n);
  return pf;
}

let primes = [], primesid = {}, marked = Array(1e7).fill(true), i=2, pid=1;

for (;i*i <= marked.length; i++) {
  while (!marked[i]) i++;
  for (let m = i+i; m < marked.length; m+=i) {
    marked[m] = false;
  }
  primesid[i] = pid++; primes.push(i);
}

for (; i < marked.length; i++) {
  if (marked[i]) {
    primesid[i] = pid++;
    primes.push(i)
  }
} 

const e = arr => arr.map(n=>n===2?[]:e(factors(primesid[n])));

function encode(n) {
  return parseInt(JSON.stringify(e(factors(n))).replace(/./g,m=>m==='['?1:m===']'?0:'').replace(/^1|10*$/g,''),2);
}

const d = arr => arr.length?primes[arr.reduce((p,n)=>p*d(n),1)-1]:2;

function decode(n) {
  let str = '1'+n.toString(2)+'10';
  str += '0'.repeat(str.replace(/0/g,'').length-str.replace(/1/g,'').length);
  return JSON.parse(str.replace(/01/g,'0,1').replace(/[01]/g,m=>+m?'[':']')).reduce((p,e)=>p*d(e),1);
}
