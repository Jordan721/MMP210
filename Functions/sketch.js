/*
Week 11 
Jordan Alexis 
Functions and Interaction
*/

function setup() {
    createCanvas(640, 360);
}

var x = 100,
    y = 100,
    w = 200,
    h = 100;

function draw() {
    //rect(x, y, w, h);
    
    background("sliver");

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
        x = random(0, 255);
        y = random(0, 255);
        w = random(0, 255);
        h = random(0, 255);
        fill(x, y, w, h);
        ellipse(random(width), random(height), random(20, 100));


    }
}
