function setup() {
  createCanvas(512,512);
  background(255);
}

var last_x=-1;
var last_y=-1;

function mouseDragged() {
  if(mouseButton != LEFT) return;
  if(last_x>0) {
    line(last_x,last_y,mouseX,mouseY);
  }
  
  last_x=mouseX;
  last_y=mouseY;
}

function mouseReleased() {
  last_x=last_y=-1;
  if(mouseButton == RIGHT) {
    loadPixels();
    flood_fill(mouseX,mouseY);
    updatePixels();
  }
}

function set_pixel(x,y,c) {
  idx=(y*512+x)*4;
  pixels[idx]=c;
  pixels[idx+1]=c;
  pixels[idx+2]=c;
  pixels[idx+3]=255;
}

function get_pixel(x,y) {
  idx=(y*512+x)*4;
  return pixels[idx];
}

//właściwa funkcja do wypełniania
function flood_fill(x,y) {
  var stack = []; //pusty stos
  stack.push([x,y]); //wrzucenie współrzędnych kliknięcia na stos

  while(stack.length > 0) { //póki stos nie jest pusty
    var current = stack.pop(); //zdejmowanie ostatniego elementu ze stosu
    var cx = current[0]; //aktualna współrzędna x
    var cy = current[1]; //aktualna współrzędna y


    //sprawdzenie poprawności współrzędnych
    if(cx < 0 || cx >= width || cy < 0 || cy >= height) {
      continue;
    }

    //pobranie koloru bieżącego piksela
    var color = get_pixel(cx, cy);

    //sprawdzenie czy kolor nie jest biały
    if(color != 255) {
      continue;
    }

    //zamalowanie bieżącego piksela
    set_pixel(cx, cy, 200);

    //dodanie sąsiadów bieżącego piksela na stos
    stack.push([cx+1, cy]); //prawy sąsiad
    stack.push([cx-1, cy]); //lewy sąsiad
    stack.push([cx, cy+1]); //dolny sąsiad
    stack.push([cx, cy-1]); //górny sąsiad
  }
}
