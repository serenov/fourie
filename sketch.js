let pathx = [];
let pathy = [];
let Xbin = [];
let Ynin = [];
let ys = [];
let angle = 0;

function setup() {
  createCanvas(1000, 1000);
  
  for(var i = 0; i < drawing.length; i = i + 8){
    pathx.push(drawing[i].x);
    pathy.push(drawing[i].y);
  }
  

  
  
  Xbin = epicircles(pathx);
  Ybin = epicircles(pathy); 
    
  Xbin.sort((a, b) => b.amp - a.amp);
  Ybin.sort((a, b) => b.amp - a.amp);
  
}

function draw(){
  background(0);
  
  let Y = drawFor();
  let X = drawFor(0, 400, 100)
  
  ys.unshift([X[0], Y[1]]);
  
  line(Y[0], Y[1], ys[0][0], ys[0][1]);
  line(X[0], X[1], ys[0][0], ys[0][1]);
  
  beginShape();
  noFill();
  stroke(255)
  for(var i = 0; i < ys.length; i++){
    stroke('yellow');
    vertex(ys[i][0], ys[i][1]);
  }
  endShape();
  
  if(ys.length > pathx.length)ys = [];
  
  const interval = 2 * PI / pathx.length;
  angle -= interval;
}

function drawFor(initp = HALF_PI, xprev = 200, yprev = 400){

  let freqbin = initp? Ybin: Xbin;
  let radiusp = 0;  
  let x = 0;
  let y = 0;
  
  for(var i = 0; i < freqbin.length; i++){
    radiusp = freqbin[i].amp;  
    let ph = freqbin[i].freq * angle + freqbin[i].phase + initp;
  
    x = xprev + radiusp * cos(ph);
    y = yprev + radiusp * sin(ph);
  
  
    noFill();
    stroke(255, 100);
  
  
    ellipse(xprev, yprev, 2 * radiusp);
  
  
  
    line(xprev, yprev,  x, y);
    xprev = x;
    yprev = y;
  }
  return [x, y];
  
}
