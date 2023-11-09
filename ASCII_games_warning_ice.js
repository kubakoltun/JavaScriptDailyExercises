function IceMazeSolver(map) {
    const width = map.split("\n")[0].length;
    map = map.replace(/\n/g, "");
    const height = map.length / width;

    const walks = [
        {dir: "u", start: 0,                  step: width,  numSteps: height, shift: 1    },
        {dir: "r", start: width-1,            step: -1,     numSteps: width,  shift: width},
        {dir: "d", start: map.length - width, step: -width, numSteps: height, shift: 1    },
        {dir: "l", start: 0,                  step: 1,      numSteps: width,  shift: width},
    ];
    const cells = Array.from(map, _ => []);
    for (let {dir, start, step, numSteps, shift} of walks) {
        for (let numShifts = width+height-numSteps; numShifts; start+=shift, numShifts--) {
            for (let i = 0, j = 0, id = start; i < numSteps; i++, id+=step) {
                if (i > j) cells[id].push({dir, dist: i-j, neighbor: cells[start+j*step]});
                if ("xE#".includes(map[id])) j = i + (map[id] === "#");
            }
        }
    }

    cells[map.indexOf("E")].isEnd = true;
    const visited = new Set;
    const queue = [{dist: 0, path: [], cell: cells[map.indexOf("S")]}];
    while (queue.length) {
        const done = queue.slice();
        queue.length = 0;
        for (const {dist, path, cell} of done.sort( (a,b) => a.dist - b.dist )) {
            if (cell.isEnd) return path;
            visited.add(cell);
            for (let next of cell) {
                if (!visited.has(next.neighbor)) queue.push({dist: dist+next.dist, path: path.concat(next.dir), cell: next.neighbor});
            }
        }
    }

    return null;
}
