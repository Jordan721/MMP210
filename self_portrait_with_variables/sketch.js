/*
Self Portrait 2 with Variables 
By Jordan Alexis 
MMP210
*/
function setup(){
    createCanvas (640, 360);
}

    var eyesize= 25;
    var faceColor = "brown"
    function draw(){
    background(200);
         
     //face
    rectMode(CENTER)
    fill(faceColor);
    ellipse (220, 20, 220, 420);
    
    //stripe
    fill("black")
    rect(220, 20, 60, 340);
    
    
    //eyes
    fill("orange")
    ellipse(250, 90, 70);
    ellipse(120, 70, 60);
         
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
         ellipse(250, 70, 40);
         ellipse(120, 70, 20);
}