/*
 Meme V 0
 Jordan Alexis
 10/2/2018
 rough draft
 MMP 210 Week 5
 */

var img;

function preload() {
    img = loadImage("Meme's_pic.png");
}

function setup() {
    createCanvas(500, 500)
}

function draw(){
    background("yellow")
    fill("red");
    var meme = "Memes for days son.";
    
    text(meme, 20, 20, 400, 400);
    image(img, 20, 20, 400, 400);
    
     var s = mouseX;
    textSize(s);

    var leadingSize = mouseY;
    textLeading(leadingSize);
    var leadingSize = mouseY;
    textLeading(leadingSize);
    
}
