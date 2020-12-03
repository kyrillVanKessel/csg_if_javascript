var rij = 0;

function setup() {
  canvas = createCanvas(451,451);
  canvas.parent('processing');
  background('coral');
  fill('white');
}

function draw() {
    for (var raster = 0;raster < 450;raster += 50) {
       for (var kolom = 0;kolom < 450;kolom += 50) {
           if(kolom == 300 && raster == 150) {
               fill('orange');
           }
           else {
               fill('white');
           }
         rect(kolom,raster,50,50);
       }
    }
}