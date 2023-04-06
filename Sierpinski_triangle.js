const A = {x:400, y:20};
const B = {x:700, y:500};
const C = {x:100, y:500};

//restore the animated version
//animate the whole cycle

function setup() {
  noLoop();
  createCanvas(800, 600);
}

function draw() {
  //noprotect
  background(10);
  stroke(255);
  point(A.x, A.y);
  point(B.x, B.y);
  point(C.x, C.y);
  let x1 = A.x;
  let y1 = A.y;
  let x2 = B.x;
  let y2 = B.y;
  let x3 = C.x;
  let y3 = C.y;
  let cx = x1;
  let cy = y1;
  for(let i = 0; i < 100000; i++) {
    let rsc = Math.round(random(0, 3));
    
    switch (rsc) {
      case 0:
        cx=(cx+x1)/2;
        cy=(cy+y1)/2;
        point(cx, cy);
        break;
      case 1:
        cx=(cx+x2)/2;
        cy=(cy+y2)/2;
        point(cx, cy);
        break;
      default:
        cx=(cx+x3)/2;
        cy=(cy+y3)/2;
        point(cx, cy);
    }
    
  }
  updatePixels();
}
