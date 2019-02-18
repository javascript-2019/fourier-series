// Fourier Series
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/125-fourier-series.html
// https://youtu.be/Mm2eYfj0SgA
// https://editor.p5js.org/codingtrain/sketches/SJ02W1OgV

let time = 0;
let wave = [];

function setup(){
    createCanvas(600,400);
}

function draw(){
    background(0);
    translate(200,200);
    let radius = 100;

    stroke(255);
    noFill();
    ellipse( 0, 0, radius*2); 

    let x = radius * cos(time);
    let y = radius * sin(time);
    //add new point to beginning of the array
    wave.unshift(y);
    fill(255);
    line(0, 0, x, y);
    ellipse(x, y, 8);
    
    translate(200,0);
    line(x-200, y, 0, wave[0]);
    beginShape();
    noFill();
    for (let i = 0; i < wave.length; i++) {
        vertex(i, wave[i]);
    }
    endShape();
    



    time += 0.05
;

    //limit the array size
    if (wave.length > 250){
        wave.pop();
    }
}


