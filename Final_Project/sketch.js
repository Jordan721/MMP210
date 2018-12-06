/*
Final Project 
Jordan Alexis 
*/
var NewAge;
var bing;

function preload() {
    NewAge = loadSound('new-age-pad.wav');
    bing = loadSound('new-age-brass.wav')
}

function setup() {
    createCanvas(900, 500, WEBGL);
    rectMode(CENTER);
}

function draw() {
    if (NewAge.isPlaying) {
        background("black");
    }
    var radius = width * 1.5;
    var vol = map(mouseY, 0, height, 1, 0);
    vol = constrain(vol, 0, 1);
    NewAge.setVolume(vol);

    var pan = map(mouseX, 0, width, -1, 1);
    pan = constrain(pan, -1, 1);
    NewAge.pan(pan);

    var rate = map(mouseX, 0, width, 0.25, 2);
    rate = constrain(rate, 0.25, 2);
    //drag to move the world.
    orbitControl();

    normalMaterial();
    translate(0, 0, -600);
    for (var i = 0; i <= 12; i++) {
        for (var j = 0; j <= 12; j++) {
            push();
            var a = j / 12 * PI;
            var b = i / 12 * PI;
            translate(sin(2 * a) * radius * sin(b), cos(b) * radius / 2, cos(2 * a) * radius * sin(b));
            if (j % 2 === 0) {
                fill('white')
                rotateZ(frameCount * 0.02);
                rotateX(frameCount * 0.02);
                cone(30, 30);
            } else {
                fill('blue')
                rotateZ(frameCount * 0.05);
                rotateX(frameCount * 0.05);
                box(30, 30, 30);
            }
            pop();
        }
    }
}

function mousePressed() {
    if (mouseX > 0 && mouseX < width &&
        mouseY > 0 && mouseY < height) {
        if (NewAge.isPlaying()) {
            NewAge.stop();
            bing.play();
        } else {
            NewAge.play();
        }
    }
}
