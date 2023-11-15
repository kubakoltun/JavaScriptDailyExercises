const addVectors = (p, q) => p.map((v, i) => v + q[i]);
const subtractVectors = (p, q) => p.map((v, i) => v - q[i]);
const dotProduct = (p, q) => p.reduce((a, v, i) => a + v * q[i], 0);
const multiplyVector = (p, c) => p.map(x => x * c);
const calculateCrossProduct = (p, q) => p.map((_, i) => p[(i + 1) % 3] * q[(i + 2) % 3] - q[(i + 1) % 3] * p[(i + 2) % 3]);

function calculateDirection(azimuth, clock) {
  const [hours, minutes] = clock.split(':').map(Number);
  const phi = azimuth;
  const theta = 2 * Math.PI * (12 * 60 - hours * 60 - minutes) / (24 * 60);

  return [Math.sin(theta) * Math.sin(phi), Math.sin(theta) * Math.cos(phi), Math.cos(theta)];
}

function solveBarycentricCoordinates(u, v, p) {
  const a = dotProduct(u, u);
  const b = dotProduct(u, v);
  const x = dotProduct(u, p);
  const c = dotProduct(v, u);
  const d = dotProduct(v, v);
  const y = dotProduct(v, p);
  const determinant = a * d - b * c;

  return [(d * x - b * y) / determinant, (-c * x + a * y) / determinant];
}

function isSafe(point, world, azimuth, clock) {
  const direction = calculateDirection(azimuth, clock);

  for (const caster of world) {
    const origin = caster.origin;
    const mesh = caster.mesh;

    for (const face of mesh.faces) {
      const triangle = face.map(i => subtractVectors(addVectors(mesh.vertices[i], origin), point));
      const u = subtractVectors(triangle[1], triangle[0]);
      const v = subtractVectors(triangle[2], triangle[0]);
      const normal = calculateCrossProduct(u, v);
      const t = dotProduct(triangle[0], normal) / dotProduct(direction, normal);

      if (t >= 0) {
        const intersectionPoint = subtractVectors(multiplyVector(direction, t), triangle[0]);
        const [a, b] = solveBarycentricCoordinates(u, v, intersectionPoint);
        
        if (a >= 0 && b >= 0 && a + b <= 1) {
          return true;
        }
      }
    }
  }

  return false;
}
