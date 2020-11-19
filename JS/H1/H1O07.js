function setup() {
  canvas = createCanvas(450,450);
  background('lavender');
  canvas.parent('processing');
  noLoop();
  angleMode(DEGREES);
  rectMode(CENTER);
  colorMode(RGB, 255, 255, 255, 1);
  fill(178, 34, 34,.5);
}

function draw() {
  noStroke();
  translate(125,125);
  rect(225,225,200,200);
  
  rotate(45);
  
  rect(225,225,200,200);
}
