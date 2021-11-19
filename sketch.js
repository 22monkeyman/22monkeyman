let c;

let x, y;
let iterations = 0;
let s;

function setup() {
  c = createCanvas(windowHeight, windowHeight);
  background(0);
  
  noSmooth();
  
  noStroke();
  
  x = width;
  y = height;
  s = (width + height) / 2;
  
  // for (let i = 1; i < iterations + 1; i++) {
  //   sponge(i);
  // }
  
  // square(x/3, y/3, s/3);
  // square(x/9, y/9, s/9);
  // sponge(4);
  // sponge(5);
  // square(x/27, y/27, s/27);
  // square(x/81, y/81, s/81);
}

function draw() {
  // background(220);
  c.position(windowWidth/2 - width/2, 0, "fixed");
}

function mousePressed() {
  if (iterations < 6) {
    iterations++;
    // console.log(iterations);
    sponge(iterations);
  }
}

function sponge(iteration) {
  for (let i = 0; i < pow(3, iteration-1); i++) {
    for (let j = 0; j < pow(3, iteration-1); j++) {
      square(x/pow(3, iteration) * ((i + (1/3)) * 3), y/pow(3, iteration) * ((j + (1/3)) * 3), s/pow(3, iteration));
    }
  }
}