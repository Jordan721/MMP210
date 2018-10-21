/*
 Meme V 1
 Jordan Alexis
 10/14/2018
 Color Quad
 MMP 210 Week 6
 */

var img;
var img2;


function preload() {
    img = loadImage("Memes_Pic.png");
    img2 = loadImage("Memes_2.jpg");
    img3= loadImage("Memes_3.jpg")
}


function setup() {
    createCanvas(930, 500);

}


function draw() {
    background(0);

    // background 4 meme 1

    var bgX = 130;
    var bgY = 40;
    var bgWidth = 320;
    var bgHeight = 25;




    // background 4 meme 2

    var bgX2 = 170;
    var bgY2 = 390;
    var bgWidth2 = 257;
    var bgHeight2 = 25;




    //text

    var textFill = 'blue';
    var textFill2 = 'orange';


    //meme image 


    if (mouseX > width / 2) {

        image(img, 0, 0, width / 2, height / 2); // top left
        image(img2, width / 2, 0, width / 2, height); // right half
        image(img3, 0, height / 2, width / 2, height / 2); // bottom left


    } else {
        image(img, 0, 0, width / 2, height / 2); // top left 
        image(img2, width / 2, height / 2, width / 2, 0); // bottom right 

        textSize(35);
        text("Memes am I right", 520, 100);
        text("Ok that's just mean", 100, 400);
    }





    fill(textFill);

    textSize(25);
    textFont("Impact, Charcoal, sans-serif");




    if (mouseIsPressed) {

        image(img, 140, 0);


        rect(bgX, bgY, bgWidth, bgHeight) // background for words

        rect(bgX2, bgY2, bgWidth2, bgHeight2) // background for words2


        fill(textFill2);
        text("Memes for days ", 132, 63);
        text("Cry all you want its happening", 172, 413);

    }


}
