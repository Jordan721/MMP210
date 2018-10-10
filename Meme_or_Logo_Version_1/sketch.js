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

    function draw() {
        background("yellow");
        fill("red");
        var meme = "Memes for days son.";

        var s = mouseX;
        textSize(s);

        var leadingSize = mouseY;
        textLeading(leadingSize);

        text(meme, 20, 20, 400, 400);
    }
