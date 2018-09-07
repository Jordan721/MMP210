/*
Self Portrait 1
By Jordan Alexis 
MMP210
*/
function setup(){
    createCanvas (640, 360);
}

function draw(){
    background("darkgreen");
    
     //face
    rectMode(CENTER)
    fill("brown");
    ellipse (220, 20, 220, 420);
    
    //hair
    fill("black")
    rect(220, 20, 140, 120);
    
    
    //eyes
    fill("orange")
    ellipse(250, 90, 40);
    ellipse(120, 70, 50);
    
    //nose
    stroke("gray")
    fill("gray")
    rect(175, 125, 50, 50);
    
    //mouth
    stroke("red")
    rect(175, 205, 90, 10, 10);
    
}