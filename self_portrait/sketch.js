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
    
    //stripe
    fill("black")
    rect(220, 20, 60, 440);
    
    
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
    fill("blue")
    rect(175, 205, 90, 10, 10);
    
}