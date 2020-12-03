var diameter = 300;
var gorb = -diameter;
var borb = height + diameter;
function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  colorMode(RGB, 255, 255, 255, 1);
  noStroke();
}

function draw() {
  background(255,255,255,1);
  fill(255,0,0,0.5);
  ellipse(width / 2,height / 2,diameter);
  fill(0,255,0,0.5);
  ellipse(width/2, gorb, diameter)
  fill(0,0,255,0.5);
  ellipse(width/2,borb,diameter);
  gorb++;
  borb--;
}