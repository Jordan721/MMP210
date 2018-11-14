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
    //rect(x, y, w, h);
    
    //face
    rectMode(CENTER);
    fill("brown");
    ellipse(220, 20, 220, 420);

    //stripe
    fill("black");
    rect(220, 20, 60, 340);


    //eyes
    fill("orange");
    ellipse(250, 90, 70);
    ellipse(120, 70, 60);

    //nose
    stroke("gray");
    fill("gray");
    rect(175, 125, 50, 50);

    //mouth
    stroke("red");
    fill("blue");
    rect(175, 205, 90, 10, 10);
}

function mousePressed() {
    if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
        r = random(0, 255);
        g = random(0, 255);
        b = random(0, 255);
        fill(r, g, b);
        ellipse(random(width), random(height), random(20, 100));


    }
}
