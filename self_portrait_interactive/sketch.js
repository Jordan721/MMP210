/*
Self Portrait 3 Interactive 
By Jordan Alexis 
MMP210
*/
function setup(){
    createCanvas (640, 360);
}

function draw(){
    background ("gray");

var x= width/2;
var y= height/2;
var y = height/2;
var s = 200; // size
var o = 50; // offset
 var eyesize= 50;
var faceColor = "brown"
var puiplsize1= 40;
var puiplsize2= 30;
var facesize= 420;

//face
    rectMode(CENTER)
    fill(faceColor);
    ellipse (220, 20, 220, facesize);
    
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
    rect(175, 125, 50, 50);
    
    //mouth
    stroke("red")
    strokeWeight(4);
    fill("blue")
    rect(175, 205, 90, 10, 10);
         
          //puipls
         fill("teal")
         ellipse(260, 70, puiplsize1);
         ellipse(110, 70, puiplsize2);
    
    var mouthSize = map(mouseX, 0, width, 5, 200); // move mouth with mouse x
	mouthSize = max(0, mouthSize); // prevents negative value error

	rect(x, y + o, s/2, mouthSize, 10); // mouth
}

