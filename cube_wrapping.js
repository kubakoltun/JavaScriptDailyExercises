let paths = [[1,2,4,5], [0,5,3,2], [0,1,3,4], [1,5,4,2], [0,2,3,5], [0,4,3,1]];
let directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];

let wrap_cube = function(shape) {
  let net = shape.split('\n').map(s => [...s]);
  let faces = new Array(6).fill().map(() => []);
  let check = new Set;
  let problem = false;

  function wrap(dirFrom, faceFrom, face, x, y, firstCall = false) {
  	if (!net[y] || !net[y][x] || net[y][x] == ' ') return;
    if (check.has(y+'|'+x)) return problem = true; 
    faces[face].push(net[y][x]);
    check.add(y+'|'+x);

    let path = paths[face];
    let faceI = path.indexOf(faceFrom);

    for (let i = 0; i < 4; ++i) {
      let dirI = (dirFrom + 2 + i) % 4;
      let pathI = (faceI + i) % 4;

      if (firstCall || (dirI != (dirFrom + 2) % 4)) {
        wrap(dirI, face, path[pathI], x + directions[dirI][0], y + directions[dirI][1]);
      }
    }
  }

  let x0 , y0;
  y0 = net.findIndex(e => -1 != (x0 = e.findIndex(s => s != ' ')));
  wrap(0, 1, 0, x0, y0, true);

  return problem ? null : faces.filter(x => x.length > 1);
};
