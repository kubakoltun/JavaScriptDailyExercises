function getGeneration(cells, generations) {
  var ce = JSON.parse(JSON.stringify(cells));
  var minY;
  var maxY;
  var minX;
  var maxX;

  for (var i = 1; i <= generations; i++) {
    expandUniverse();
    ce = ce.map(function(r, row){return r.map(function(c, col){return setValue(row, col, -c);});});
    getBoundaries();
    shrinkUniverse();
  }

  function setValue(row, col, sum) {
    for (var r = row - 1; r <= row + 1; r++)
      for (var c = col - 1; c <= col + 1; c++)
        sum += (ce[r] && ce[r][c]) | 0;

    return +(sum == 3 || sum == 2 && ce[row][col]);
  }

  function getBoundaries() {
    minY = maxY = minX = maxX = -1;
    
    ce.forEach(function(r, row){r.forEach(function(c, col){
      if (c == 1) {
        minY = minY == -1 ? row : Math.min(minY, row);
        maxY = maxY == -1 ? row : Math.max(maxY, row);
        minX = minX == -1 ? col : Math.min(minX, col);
        maxX = maxX == -1 ? col : Math.max(maxX, col);
      }
    });});
  }

  function expandUniverse() {
    var a = [], b = [];

    ce[0].forEach(function(){a.push(0); b.push(0);});
    ce.unshift(a);
    ce.push(b);
    ce.map(function(i){i.unshift(0); i.push(0);});
  }

  function shrinkUniverse() {
    ce = ce.map(function(e){ return e.slice(minX, maxX + 1);});
    ce = ce.slice(minY, maxY + 1);
  }

  return ce;
}
