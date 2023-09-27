function recover_secret(triplets) {
  const chars = new Set();
  const graph = new Map();

  triplets.forEach(triplet => {
    triplet.forEach(char => {
      chars.add(char);
      if (!graph.has(char)) {
        graph.set(char, new Set());
      }
    });

    graph.get(triplet[0]).add(triplet[1]);
    graph.get(triplet[1]).add(triplet[2]);
  });

  const result = [];
  const visited = new Set(); 

  function visit(char) {
    if (!visited.has(char)) {
      visited.add(char);
      graph.get(char).forEach(neighbor => visit(neighbor));
      result.unshift(char); 
    }
  }

  chars.forEach(char => visit(char));

  return result.join('');
}
