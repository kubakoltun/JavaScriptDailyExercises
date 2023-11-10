const volume = (board, DIRS = [[0,1], [1,0], [0,-1], [-1,0]]) => {
  const flood = (h,x,y) => {
    const q = [[x,y]];
    while (q.length) {
      const [x,y] = q.pop();
      for (let [dx,dy] of DIRS) {
        const a=x+dx, b=y+dy, neigh=`${a},${b}`;

        if (0 <=a && a < X && 0 <= b && b < Y && !filled.has(neigh)) {
          const hNeigh = board[a][b]
          filled.set(neigh, Math.max(0,h-hNeigh));
          if(hNeigh<h) q.push([a,b]);
          else hPush(frontier, [hNeigh,a,b]);
        }
      }
    }
  }
  
  const X = board.length, Y = X && board[0].length;
  const frontier = [], filled = new Map();
  const prep = (x, y)=>{ 
    hPush(frontier, [board[x][y],x,y]); filled.set(`${x},${y}`, 0)
  }
  
  board[0].forEach((_, y)=>{ prep(0, y); prep(X-1, y) })
  for (let i=1;i<X-1;i++) {   
    prep(i,0); prep(i,Y-1); 
  }
  while (frontier.length) flood(...hPop(frontier));
  return [...filled.values()].reduce((a,b)=>a+b,0);
}

const hPush = (h, v)=> {
    let i=h.length, j=i-1>>1;
    h.push(v);
    while (i > 0 && h[i][0] < h[j][0]) {
      const tmp = h[i]; h[i]=h[j]; h[j]=tmp; i=j; j=i-1>>1;
    }
}

const hPop = h => {
    [h[0],h[h.length-1]] = [h[h.length-1],h[0]];
    let out = h.pop(), i=0, j=2*i+1, k=2*i+2, swap=0;
    while (i < h.length) {
      if (j >= h.length) break;
      if (k == h.length) k=j;
      swap = h[k][0]>h[j][0] ? j:k;

      if (h[i][0] > h[swap][0]) {
        const tmp = h[i]; h[i] = h[swap]; h[swap] = tmp; i = swap; j = 2*i+1; k = 2*i+2; swap = 0;
      } else break;
    }

  return out;
}
