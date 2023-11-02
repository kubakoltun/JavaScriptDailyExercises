function central_pixels(image, colour) {
  let m = image.pixels, h=image.height, w=image.width, d=Array(h*w).fill(0);
  for (let i = 0; i < h*w; i++) {
    if (i % w === 0 || i < w || m[i-w] !== m[i] || m[i-1] !== m[i]) d[i] = 1;
    else d[i] = Math.min(d[i-w], d[i-1])+1;
  }

  let max = 0, p=[];
  for (let i = h*w-1; i >= 0; i--) {
    if ((i+1) % w === 0 || i+w >= h*w || m[i+w] !== m[i] || m[i+1] !== m[i]) d[i] = 1;
    else d[i] = Math.min(Math.min(d[i+w], d[i+1])+1, d[i]);
    if (m[i] === colour) {
      if (max < d[i]) {
        max = d[i];
        p = [];
      }
      if (max === d[i]) p.push(i);
    }
  }

  return p;
}
