function take_snapshot(){    
  save('myCanvas.png');
}

function setup() {
  canvas = createCanvas(410, 300);
facingMode: {
        exact: "environment"
}
  canvas.center();
  video = createCapture(VIDEO);
  video.size(width, height);
 
  video.hide();
}

function draw() {
  image(video, 0, 0, width, height);
  filter(INVERT);
}
