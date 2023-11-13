function line(grid) {
  let is = (a,b) => b.includes(a), moves = [[-1,0],[0,1],[1,0],[0,-1]], g;
  
  let trav = ([r,c], dir) => {
    g[r][c] = ' ';
    let X = moves.map(([R,C])=>[R+r,C+c]);
    let P = X.map(([R,C])=>g[R]&&g[R][C]||' ').map((d,i)=>d!='-|-|'[i]?d:' '), [U,R,D,L] = P;
    let go = d => trav(X['URDL'.indexOf(d)], d)  ;
    
    switch (grid[r][c]) {
      case 'X': return dir && g.every(w=>w.every(q=>q==' ')) || (P.join``.match(/\S/g)||[]).length == 1 && go('URDL'[P.findIndex(l=>l!=' ')]);
      case '|': return is(dir,'UD') && go(dir);     
      case '-': return is(dir,'RL') && go(dir);
      case '+': return is(dir,'RL') ? 
        is(U,'|+X') && is(D,'- ') && go('U') || is(D,'|+X') && is(U,'- ') && go('D')  
        : is(R,'-+X') && is(L,'| ') && go('R') || is(L,'-+X') && is(R,'| ') && go('L')  ;
    }
    return false;
  }

  return grid.some((w,r) => [...w].some((s,c) => s=='X' && (g = grid.map(y=>[...y]), trav([r,c])) ));
}
