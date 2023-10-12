function bugs_life(a, b, c) {
  const path1 = Math.sqrt(a * a + (b + c) * (b + c));
  const path2 = Math.sqrt(b * b + (a + c) * (a + c));
  const path3 = Math.sqrt(c * c + (a + b) * (a + b));
  
  const shortestPath = Math.min(path1, path2, path3);
  
  return shortestPath;
}
