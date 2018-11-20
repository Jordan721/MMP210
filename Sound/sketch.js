/*
WEEK 12 
MMP 210 
Jordan Alexis 
*/
var NewAge;
var  bing;
function preload() {
    NewAge = loadSound('new-age-pad.wav');
    bing = loadSound('new-age-brass.wav')
}

function draw() {
    if (NewAge.isPlaying()) {
        background("red");
    } else {
        background('0');
    }

    var vol = map(mouseY, 0, height, 1, 0);
    vol = constrain(vol, 0, 1);
    NewAge.setVolume(vol);

    var pan = map(mouseX, 0, width, -1, 1);
    pan = constrain(pan, -1, 1);
    NewAge.pan(pan);

    var rate = map(mouseX, 0, width, 0.25, 2);
    rate = constrain(rate, 0.25, 2);
    // music.rate(rate);

    stroke('blue');
    line(0, mouseY, width, mouseY);
    line(mouseX, 0, mouseX, height);
    ellipse(mouseX, mouseY, 20);
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
