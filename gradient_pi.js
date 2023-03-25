function setup() {
  createCanvas(800,600);
}

function draw() {
  //noprotect
  background(10);
  for(y=0; y<height; y++) {
    for(x=0; x<width; x++) {
      let dx = x - width/2;
      let dy = y - height/2;
      let part1 = (x+y)/(height+width)*255;
      let d = sqrt(dx*dx+dy*dy);     
      set(x, y, color(255-d, d, part1));
    }
  }
  updatePixels();
}
