function setup() {
  createCanvas(700, 600);
  background(228,224,220);
  angleMode(DEGREES);
  noStroke();
 
  push();
  rotate(-15);
  fill(200,200,200);
  triangle(280, 100, 30, 550, 450, 550);
  fill(54,54,54);
  rect(240,230,80,50);
  fill(220,186,150);
  rect(260,280,40,20);
  fill(221,213,207);
  rect(264,310,60,5);
  pop();

  push();
  rotate(25);
  fill("#E1CF86");
  rect(440,-120,10,130);
  fill(210,150,133);
  rect(448,-100,12,60);
  pop();

  push();
  rotate(-20);
  fill(220,210,200);
  rect(170,160,150,40);
  fill(150,106,57);
  rect(240,200,50,30);
  fill(119,66,50);
  rect(260,200,120,8);
  fill(72,76,95);
  rect(270,230,10,8);
  fill(63,107,178);
  triangle(340, 208, 300, 280, 380, 280);
  pop();

  push();
  rotate(8);
  fill(221,208,156);
  rect(620,240,10,10);
  fill(207,186,154);
  rect(540,250,100,10);
  fill(223,208,187);
  rect(450,260,200,80);
  fill(56,56,56);
  rect(510,340,90,50);
  fill(221,212,194);
  rect(460,340,30,25);

  pop();




}

function draw() {
}
