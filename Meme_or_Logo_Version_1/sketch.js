/*
 Meme V 0
 Jordan Alexis
 10/2/2018
 rough draft
 MMP 210 Week 5
 */

function setup() {
    createCanvas(500, 500)
}
var img;

function preload() {
    img = loadImage("Memes_Pic.png");
}

function draw() {
    background("yellow")
    fill("red");
    var meme = "Memes for days son.";

    var s = mouseX;
    textSize(s);

    var leadingSize = mouseY;
    textLeading(leadingSize);
    var leadingSize = mouseY;
    textLeading(leadingSize);

    image(img, 20, 20, 400, 400);
    text(meme, 20, 20, 400, 400);

}
