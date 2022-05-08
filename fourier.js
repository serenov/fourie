
function epicircles(path){
  let N = path.length;
  let sampfreq = 1 / N;
  let x = 0;
  let y = 0;
  
  let X = [];
  
  for(var i = 0; i < N; i++){
    x = 0;
    y = 0;
    for(var j = 0; j < N; j++){
      let ph = i * j * sampfreq * TWO_PI;
      x = x + path[j] * cos(ph);
      y = y + path[j] * sin(ph)
    }
    x = x / N;
    y = y / N;
    X[i] = {amp: sqrt(x*x + y*y), phase: atan2(y, x), freq: i};

  }
  return X;
} 