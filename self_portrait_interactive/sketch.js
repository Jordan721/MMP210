/*
Self Portrait 3 Interactive 
By Jordan Alexis 
MMP210
*/
function setup(){
    createCanvas (640, 360);
}

    var eyesize= 50;
    var faceColor = "brown"
    var puiplsize1= 40;
    var puiplsize2= 30;
    var facesize= 420;
    function draw(){
    background(200);
         
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
}