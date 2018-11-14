/*
Week 11 
Jordan Alexis 
Functions and Interaction
*/
function setup() {
    createCanvas(640, 360);
}

var r,
    g,
    b;
var x = 100,
    y = 100,
    w = 200,
    h = 100;

function draw() {
    rect(x, y, w, h);
}

function mousePressed() {
    if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
        r = random(0, 255);
        g = random(0, 255);
        b = random(0, 255);
        fill(r, g, b);
        ellipse(random(width), random(height), random(20, 100));

        function draw() {
            background(200);
        }
    }
}
