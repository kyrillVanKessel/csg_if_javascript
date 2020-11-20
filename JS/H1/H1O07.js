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
  translate(225,-75);
  rect(0,height/2+90,200,200);
  
  push();
  noStroke();
  fill(255,225,0);
  rect(0,height/2+90,50,50);
pop();
  rotate(45);

  rect(225,225,200,200);
}
