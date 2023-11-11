let ar;
let emptyStr;
let a, b, c, d, e, f, g, h, i, j;
with(Object) ar = entries(Object);
with(ar) emptyStr = join();

let getCharCode;
with(emptyStr) getCharCode = charCodeAt;
with(getCharCode) getCharCode = str => bind(str)();

with(ar) let l = () => length;
with(ar) let p = () => push(a);

a = l();p();b = l();p();c = l();p();d = l();p();e = l();
p();f = l();p();g = l();p();h = l();p();i = l();p();j = l();

let arr;
with(Object) arr = entries(Object);
with(arr) let n = (num, flag) => (flag ? length = a : a, num === undefined ? a : push(num), num === undefined ?  parseInt(join(emptyStr)) : n);

let buf;
with(Object) buf = entries(Object);
with(buf) push(a,n(j,b)(h)(),n(b,b)(b)(f)(),n(b,b)(a)(j)(),b,a,a,a,b,n(b,b)(d)(g)(),n(b,b)(c)(i)(),n(b,b)(c)(i)(),n(b,b)(c)(i)(),a,b,n(j,b)(g)(),d,n(b,b)(c)(e)(),n(b,b)(c)(e)(),n(b,b)(c)(h)(),b,n(b,b)(c)(e)(),d,n(b,b)(d)(a)(),n(b,b)(c)(i)(),n(b,b)(c)(i)(),n(b,b)(c)(i)(),a,b,a,e,n(b,b)(d)(c)(),n(b,b)(c)(i)(),n(b,b)(c)(i)(),n(b,b)(c)(i)(),a,b,n(b,b)(b)(c)(),a,a,f,n(b,b)(d)(b)(),n(b,b)(c)(i)(),n(b,b)(c)(i)(),n(b,b)(c)(i)(),a,b,a,b,g,n(b,b)(c)(j)(),n(b,b)(c)(i)(),n(b,b)(c)(i)(),n(b,b)(c)(i)(),a,a,h,n(b,b)(e)(f)(),n(b,b)(c)(i)(),n(b,b)(c)(i)(),n(b,b)(c)(i)(),a,c,g,n(b,b)(a)(j)(),n(b,b)(a)(b)(),n(b,b)(a)(j)(),n(b,b)(b)(b)(),n(b,b)(b)(e)(),n(b,b)(c)(b)(),c,a,e,n(j,b)(j)(),n(j,b)(h)(),n(b,b)(a)(i)(),n(j,b)(j)(),a,a,n(b,b)(a)(),n(c,b)(e)(b)(),n(b,b)(c)(i)(),n(b,b)(c)(i)(),n(b,b)(c)(i)(),a,b,n(c,b)(d)(f)(),n(b,b)(c)(i)(),n(b,b)(c)(i)(),n(b,b)(c)(i)(),a,b,b,n(b,b)(c)(e)(),c,n(g,b)(e)(),c,n(g,b)(e)(),c,n(g,b)(e)(),c,n(g,b)(e)(),c,n(g,b)(e)(),n(d,b)(c)(),c,n(g,b)(f)(),n(j,b)(b)(),n(b,b)(a)(g)(),n(d,b)(e)(),c,n(g,b)(f)(),n(b,b)(a)(),n(h,b)(f)(),n(b,b)(d)(),a,c,n(g,b)(e)(),n(d,b)(c)(),c,n(b,b)(e)(),n(b,b)(b)(),a,b,b,b,b,c,d,b,e,b,f,a,n(b,b)(b)(),n(d,b)(c)(),a,n(b,b)(h)(a)(),n(d,b)(c)(),b,n(b,b)(h)(a)(),n(b,b)(b)(b)(),n(b,b)(i)(d)(),n(d,b)(d)(),d,n(b,b)(b)(),n(d,b)(c)(),d,n(b,b)(f)(),n(b,b)(b)(),n(d,b)(c)(),a,n(d,b)(c)(),b,n(b,b)(g)(c)(),n(b,b)(f)(),n(b,b)(b)(),n(d,b)(c)(),a,n(d,b)(c)(),b,n(b,b)(g)(a)(),n(b,b)(f)(),n(b,b)(b)(),n(d,b)(c)(),a,n(d,b)(c)(),b,n(b,b)(g)(b)(),n(b,b)(f)(),n(b,b)(b)(),n(d,b)(c)(),a,n(d,b)(c)(),b,n(b,b)(g)(d)(),n(g,b)(i)(),a,a,a,a,a,a,n(i,b)(j)(),n(g,b)(e)(),n(b,b)(g)(c)(),n(b,b)(f)(g)(),n(g,b)(i)(),a,a,a,a,a,a,n(i,b)(j)(),n(g,b)(e)(),n(b,b)(g)(d)(),n(b,b)(b)());

let wasmCode = new Buffer(buf);
with (WebAssembly)
let wasmModule = new Module(wasmCode),
    wasmInstance = new Instance(wasmModule);
with(wasmInstance)with(exports) let reallyCalc = calc;

calc = (numa,numb,o) =>
  getCharCode(o) === n(e,b)(h)() ?
    numb === a ? parseInt(emptyStr) : reallyCalc(numa,numb, n(e,b)(h)()) :
    getCharCode(o) === n(d,b)(h)() ?
      numb === a ? parseInt(emptyStr) : reallyCalc(numa,numb, n(d,b)(h)()) :
      reallyCalc(numa,numb, getCharCode(o));
