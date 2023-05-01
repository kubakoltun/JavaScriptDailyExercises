var imgA;
var imgB;
var transformMatrix;

function setup() {
  createCanvas(512, 512);
  background(255);
  imgA = createImage(512, 512);
  imgB = createImage(512, 512);
  imgA.loadPixels();
  imgB.loadPixels();
  var d = pixelDensity();

  for (var i = 0; i < 512 * 512 * 4 * d; i += 4) {
    imgA.pixels[i] = 240;
    imgA.pixels[i + 1] = 250;
    imgA.pixels[i + 2] = 240;
    imgA.pixels[i + 3] = 255;
    imgB.pixels[i] = 240;
    imgB.pixels[i + 1] = 240;
    imgB.pixels[i + 2] = 250;
    imgB.pixels[i + 3] = 255;
  }

  imgA.updatePixels();
  imgB.updatePixels();
  transformMatrix = makeIdentity();
  //transformMatrix = makeTranslation(100, 50);
  //transformMatrix = makeRotation(PI / 4);
  //transformMatrix = makeScale(1.5, 1.5);
  //transformMatrix = makeShear(0.5, 0);
}

function draw() {
  if (!keyIsDown(32)) {
    image(imgA, 0, 0);
    text('Image A', 10, 20);
  } else {
    image(imgB, 0, 0);
    text('Image B', 10, 20);
  }
}

function makeIdentity() {
  return [    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ];
}

function makeTranslation(tx, ty) {
  return [    [1, 0, tx],
    [0, 1, ty],
    [0, 0, 1]
  ];
}

function makeScale(sx, sy) {
  return [    [sx, 0, 0],
    [0, sy, 0],
    [0, 0, 1]
  ];
}

function makeRotation(angle) {
  var c = Math.cos(angle);
  var s = Math.sin(angle);
  return [    [c, -s, 0],
    [s, c, 0],
    [0, 0, 1]
  ];
}

function makeShear(sx, sy) {
  return [    [1, sx, 0],
    [sy, 1, 0],
    [0, 0, 1]
  ];
}

function multiplyMatrixVector(matrix, vector) {
  var result = [0, 0, 0];
  for (var i = 0; i < 3; ++i) {
    for (var j = 0; j < 3; ++j) {
      result[i] += matrix[i][j] * vector[j];
    }
  }
  return result;
}

function makeVector(x, y) {
  return [x, y, 1];
}

function drawVector(img, vec) {
  img.set(vec[0], vec[1], color(0, 0, 0));
  img.updatePixels();
}

function multiplyMatrices(a, b) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    result[i] = [];
    for (let j = 0; j < b[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < a[0].length; k++) {
        sum += a[i][k] * b[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
}

function mouseDragged() {
  let mouseVec = makeVector(mouseX, mouseY);
  drawVector(imgA, mouseVec);

  // sequence of transformations for imgB
  let translationMatrix = makeTranslation(100, 50);
  let rotationMatrix = makeRotation(PI / 4);
  let scaleMatrix = makeScale(1.5, 1.5);

  // multiply matrices in desired order
  let transformMatrixB = multiplyMatrices(scaleMatrix, multiplyMatrices(translationMatrix, rotationMatrix));

  // apply sequence of transformations to mouseVec
  let transformedVec = multiplyMatrixVector(transformMatrixB, mouseVec);

  drawVector(imgB, transformedVec);
}
