let flowers = [];

function setup() {
  createCanvas(800, 600);
  //create flowers
  for (let i = 0; i < 1000; i++) {
    let rx = floor(random(0,800));
    let ry = floor(random(400,600));
    let rr = floor(random(10,200));
    let rg = floor(random(10,200));
    let rb = floor(random(10,200));
    flowers.push({x: rx, y: ry, r: rr, g: rg, b: rb});
  }
}

function draw() {
  //noprotect
  //sky
  background(10);
  for(y = 0; y < height/1.5; y++) {
    for(x = 0; x < width; x++) {  
      set(x, y, color(95, 197, 237));
    }
  }
  
  //grass
  for(y = height/1.5; y < height; y++) {
    for(x = 0; x < width; x++) {  
      set(x, y, color(34, 125, 66));
    }
  }
  
  //flowers
  for (let i = 0; i < flowers.length; i++) {
    let f = flowers[i];
    set(f.x, f.y, color(f.r, f.g, f.b));
  }
  
  //walls
  for (y = height/3; y < height/1.5; y++) {
    for (x = width/4; x < floor(width/1.33); x++) {  
      set(x, y, color(122, 69, 26));
    }
  }
  
  //roof
  const triangleWidth = floor(width/1.33);
  const triangleHeight = height/4;
  const slope = triangleWidth / triangleHeight;
  const startX = width/2;
  const startY = height/3;
  for (let y = startY; y > startY - triangleHeight; y--) {
    const rowWidth = (y - startY + triangleHeight) * slope * 1.2;
    for (let x = startX - rowWidth / 2; x < startX + rowWidth / 2; x++) {
      set(x, y, color(125, 20, 27));
    }
  }
  updatePixels();
}
