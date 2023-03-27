let histogram;

function preload() {
  img = loadImage("https://i.iplsc.com/-/0009B9M82SRJD82N-C411.jpg");
  
}

function setup() {
  createCanvas(256,256);
  histogram = new Array(256).fill(0);
  
  img.loadPixels();
  for(x=0;x<img.width;x++) {
    for(y=0;y<img.height;y++) {
      let pos = 4*(y*img.width+x);
      let r = img.pixels[pos];
      let g = img.pixels[pos+1];
      let b = img.pixels[pos+2];
      let a = img.pixels[pos+3];
      
      let index = Math.floor((r+g+b)/3);
      histogram[index]++;
    }
  }
  img.updatePixels();
  img.resize(256,256);
  img.filter('gray');
  background(255);
  
  for (let i = 0; i < histogram.length; i++) {
    let x = map(i, 0, histogram.length, 0, width);
    let h = map(histogram[i], 0, max(histogram), 0, height);
    line(x, height, x, height - h);
  }
}
