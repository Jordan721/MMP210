/*
WEEK 12.5
MMP 210 
Jordan Alexis 
Keyvboard
*/

function setup() {
    createCanvas(640, 360);
    textSize(50);
}

function draw() {

    if (keyIsPressed) {
        if (key == "b") {
            background("blue");
        }
    }
    background(0);
} else {
    background("slver");

    background(0);

    fill(255);
    text(keyIsPressed, 50, 50);
    text(key, 50, 50);
    text(keyCode, 50, 50);
}
