function findPath(start, end) {
  const visited = new Set();
  const path = [];

  function dfs(current) {
    visited.add(current);
    path.push(current);

    if (current === end) {
      return path;
    }

    const directions = ['north', 'south', 'east', 'west'];
    for (const direction of directions) {
      const neighbor = current[direction];
      if (neighbor && !visited.has(neighbor)) {
        const result = dfs(neighbor);
        if (result) {
          return result;
        }
      }
    }
    path.pop();
    return null;
  }

  dfs(start);

  return path;
}
