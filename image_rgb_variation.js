let img;
let img_r;
let img_g;
let img_b;
let img_sum;

function preload() {
  img = loadImage("https://i.iplsc.com/-/0009B9M82SRJD82N-C411.jpg");
}

function setup() {
  createCanvas(512, 512); 
  img.resize(256, 256);
  img.loadPixels();

  img_r = createImage(256, 256);
  img_g = createImage(256, 256);
  img_b = createImage(256, 256);
  img_sum = createImage(256, 256);

  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
      let pos = 4 * (y * img.width + x);
      let r = img.pixels[pos];
      let g = img.pixels[pos + 1];
      let b = img.pixels[pos + 2];

      img_r.set(x, y, color(r, 0, 0));
      img_g.set(x, y, color(0, g, 0));
      img_b.set(x, y, color(0, 0, b));
    }
  }

  img_r.updatePixels();
  img_g.updatePixels();
  img_b.updatePixels();

  img_sum.blend(img_r, 0, 0, 256, 256, 0, 0, 256, 256, ADD);
  img_sum.blend(img_g, 0, 0, 256, 256, 0, 0, 256, 256, ADD); 
  img_sum.blend(img_b, 0, 0, 256, 256, 0, 0, 256, 256, ADD); 

  image(img_r, 0, 0);
  image(img_g, img.width, 0);
  image(img_b, 0, img.height);
  image(img_sum, img.width, img.height);
}
