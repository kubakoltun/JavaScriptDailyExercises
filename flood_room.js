function flood(room, water) {
  if (!water) return room.replace("|", " ");

  const width = room.indexOf('\n')+1;
  room = [...room];
  const stack = [], get = (y, x) => room[y*width+x];
  let pivot, stop, [dir, y, x] = room[width] == '|'?[1, 1, 1]:[-1, 1, width-2];
  room[dir+1 ? width : 2*width-2] = ' ';

  while (water) {
    if (get(y+1,x) === undefined) break;
    if (get(y+1,x) === ' ') {
      stack.push([pivot, dir, stop]);
      [pivot, y, stop] = [x, y+1];
    } 
    else if (get(y, x + dir) === 'x') {
      if (stop !== undefined) {
        const l = Math.abs(stop-x)+1;
        const c = l > water ? String(water%10) : '~';

        for (x; x!=stop-dir; x-=dir) room[y*width+x] = c;

        [water, x, y] = [Math.max(0, water-l), pivot, y-1];
        [pivot, dir, stop] = stack.pop();
      } else [stop, dir, x] = [x, -dir, pivot];
    } else x+=dir;
  }
  
  return room.join('');
}
