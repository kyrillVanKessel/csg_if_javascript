function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}

function draw() {
  noStroke();
  translate(0,height/2);
  for(var x=0; x<5; x+=1) {
      rect(0,0,75,75);
      translate
  }
}