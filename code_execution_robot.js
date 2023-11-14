function execute(code) {
  if (code.includes('(')) {
      const a = code.lastIndexOf('('), b = code.indexOf(')', a);
      const n = (code.slice(b+1).match(/^\d+/)||[''])[0];
      const x = n === '0' ? 0 : +n || 1;
      return execute(
        code.slice(0, a) + code.slice(a+1, b).repeat(x) + code.slice(b+1+(n ? n : '').length)
      );
  }
  code = code.replace(/[LFR]\d+/g, m => m[0].repeat(+m.slice(1)));
  const patterns = {};
  
  while (code.includes('p')) {
    const a = code.lastIndexOf('p'), b = code.indexOf('q', a);
    const n = code.slice(a+1).match(/^\d+/)[0];
    if (n in patterns) throw `pattern ${n} is already defined`;
    patterns[n] = code.slice(a+1+n.length, b);
    code = code.slice(0,a) + code.slice(b+1);
  }
  
  for (const n in patterns) {
      const regex = new RegExp('(P'+n+')(?!\\d)', 'g');
      for (const m in patterns) {
          patterns[m] = patterns[m].replace(regex, patterns[n]);
      }
      code = code.replace(regex, patterns[n]);
  }
  
  if (code.includes('P')) throw 'non-existent pattern';

  const dir = [[0,1], [1,0], [0,-1], [-1,0]], robot = {r:0, c:0, d:0}, points = new Set([robot.r+','+robot.c]); 
  let l = 0, r = 0, u = 0, d = 0;
  [...code].forEach(c => {
      if (c === 'F') {
          robot.r += dir[robot.d][0];
          robot.c += dir[robot.d][1];
          d = Math.max(d,robot.r);
          u = Math.min(u,robot.r);
          r = Math.max(r,robot.c);
          l = Math.min(l,robot.c);
          points.add(robot.r+','+robot.c);
      } else {
        robot.d = (robot.d + (c === 'L' ? 3 : 1)) % 4;
      }
  });
  return [...Array(d-u+1)].map((_, y) => 
           [...Array(r-l+1)].map((v, x) => 
             points.has((y+u)+','+(x+l)) ? '*' : ' ').join``
           ).join`\r\n`
}
