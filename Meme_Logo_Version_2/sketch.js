/*
 Meme V 1
 Jordan Alexis
 10/14/2018
 Color Quad
 MMP 210 Week 6
 */

var img;

function preload() {
    img = loadImage("Memes_pic.png");
}

function setup() {
    createCanvas(500, 500)
}

function draw() {
    fill("red");
    var meme = "Memes for days son.";

    var s = mouseX;
    textSize(s);

    var leadingSize = mouseY;
    textLeading(leadingSize);
    var leadingSize = mouseY;
    textLeading(leadingSize);

    image(img, 20, 20, 400, 400);
    //text(meme, 20, 20, 400, 400);

    strokeWeight(1);
    stroke("white");
    line(width / 2, 0, width / 2, height);
    line(0, height / 2, width, height / 2);
    noStroke();

    if (mouseX < width / 2 && mouseY < height / 2) {
        // top left
        fill('gray');
    } else if (mouseX > width / 2 && mouseY < height / 2) {
        // top right
        fill('blue');
    } else if (mouseX < width / 2 && mouseY > height / 2) {
        // bottom left
        fill('black');
    } else {
        // bottom right
        fill('teal');
    }
    
    if (mouseIsPressed) {
        var s = (mouseX - pmouseX) + (mouseY - pmouseY);
        ellipse(mouseX, mouseY, s);
    }
}
