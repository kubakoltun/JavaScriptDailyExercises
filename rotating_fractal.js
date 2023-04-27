const A = { x: 400, y: 20 };
const B = { x: 700, y: 500 };
const C = { x: 100, y: 500 };

const vertices = [A, B, C];
const deltas = [];

function setup() {
  createCanvas(800, 600);
  frameRate(25);

  for (let i = 0; i < 3; i++) {
    deltas[i] = createVector(random(-5, 5), random(-5, 5));
  }
}

function draw() {
  background(10);

  for (let i = 0; i < 3; i++) {
    vertices[i].x += deltas[i].x;
    vertices[i].y += deltas[i].y;

    if (vertices[i].x < 0 || vertices[i].x > width) {
      deltas[i].x *= -1;
    }
    if (vertices[i].y < 0 || vertices[i].y > height) {
      deltas[i].y *= -1;
    }
  }

  stroke(255);
  noFill();
  triangle(A.x, A.y, B.x, B.y, C.x, C.y);

  let cx = random(width);
  let cy = random(height);
  for (let i = 0; i < 100000; i++) {
    let rsc = Math.floor(random(0, 3));
    cx = (cx + vertices[rsc].x) / 2;
    cy = (cy + vertices[rsc].y) / 2;
    set(cx, cy, color(255));
  }

  updatePixels();
}
