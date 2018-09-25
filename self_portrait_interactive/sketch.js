/*
Self Portrait 3 Interactive 
By Jordan Alexis 
MMP210
*/
function setup() {
    createCanvas(640, 360);
}

function draw() {
    background("gray");

    var x = width / 17;
    var y = height / 20;
    var y = height / 20;
    var s = 200; // size
    var o = 50; // offset
    var eyesize = 50;
    var faceColor = "brown"
    var puiplsize1 = 20;
    var puiplsize2 = 30;
    var facesize = 420;

    //face
    rectMode(CENTER)
    fill(faceColor);
    ellipse(220, 20, 220, facesize);

    //stripe
    fill("black")
    rect(220, 20, 60, 340);


    //eyes
    fill("orange")
    ellipse(270, 90, eyesize);
    ellipse(120, 70, eyesize);

    //nose
    stroke("gray")
    fill("gray")
    rect(220, 125, 50, 50);

    //mouth
    stroke("red")
    strokeWeight(4);


    //puipls
    fill("red")
    ellipse(270, 90, puiplsize1);
    ellipse(120, 70, puiplsize2);

    var mouthSize = map(mouseX, 0, width, 5, 200); // move mouth with mouse x
    mouthSize = max(0, mouthSize); // prevents negative value error
    fill("blue")
    rect(220, 125 + 80, s / 2, mouthSize, 175); // mouth
}
